import React, { useEffect, useRef, useState, useCallback } from "react";
import { io } from "socket.io-client";
import Peer from "peerjs"; // For WebRTC
import { IoLogOutOutline } from "react-icons/io5";
import { SlCallEnd } from "react-icons/sl";
import { RxTrackNext } from "react-icons/rx";
import { CiMicrophoneOff, CiMicrophoneOn } from "react-icons/ci";
import "./App.css";
import { FaMusic } from "react-icons/fa";

// Connect to the server
const socket = io("http://localhost:5000");

const Room = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [peerConnection, setPeerConnection] = useState(null);
  const [stream, setStream] = useState(null);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [partnerSocketId, setPartnerSocketId] = useState("");

  const handleAnswer = useCallback(
    (answer) => {
      if (peerConnection) {
        peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
      }
    },
    
    [peerConnection]
  );

  const handleIceCandidate = useCallback(
    (candidate) => {
      if (peerConnection) {
        peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
      }
    },
    [peerConnection]
  );

  const startCall = useCallback(
    (partnerSocketId) => {
      const pc = new RTCPeerConnection();

      stream.getTracks().forEach((track) => pc.addTrack(track, stream));

      pc.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit("ice-candidate", event.candidate, partnerSocketId);
        }
      };

      pc.ontrack = (event) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
        }
      };

      pc.createOffer()
        .then((offer) => {
          return pc.setLocalDescription(offer);
        })
        .then(() => {
          socket.emit("offer", pc.localDescription, partnerSocketId);
        })
        .catch((err) => {
          console.error("Error creating offer:", err);
        });

      setPeerConnection(pc);
    },
    [stream]
  );

  const handleOffer = useCallback(
    (offer, fromSocketId) => {
      const pc = new RTCPeerConnection();

      // Set up local media stream
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));

      pc.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit("ice-candidate", event.candidate, fromSocketId);
        }
      };

      pc.ontrack = (event) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
        }
      };

      pc.setRemoteDescription(new RTCSessionDescription(offer))
        .then(() => {
          return pc.createAnswer();
        })
        .then((answer) => {
          return pc.setLocalDescription(answer);
        })
        .then(() => {
          socket.emit("answer", pc.localDescription, fromSocketId);
        })
        .catch((err) => {
          console.error("Error handling offer:", err);
        });

      setPeerConnection(pc);
    },
    [stream]
  );

  useEffect(() => {
    socket.on("paired", (partnerSocketId) => {
      console.log(`Paired with user: ${partnerSocketId}`);
      startCall(partnerSocketId);
    });

    socket.on("offer", (offer, fromSocketId) => {
      console.log(`Received offer from ${fromSocketId}`);
      handleOffer(offer, fromSocketId);
    });

    socket.on("answer", (answer) => {
      console.log("Received answer:", answer);
      handleAnswer(answer);
    });

    socket.on("ice-candidate", (candidate) => {
      console.log("Received ICE candidate:", candidate);
      handleIceCandidate(candidate);
    });

    return () => {
      socket.off("servermessage");
      socket.off("paired");
      socket.off("offer");
      socket.off("answer");
      socket.off("ice-candidate");
    };
  }, [handleAnswer, handleIceCandidate, handleOffer, startCall]);

  const handleCallUser = async () => {
    try {
      const webCamStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = webCamStream;
      }

      setStream(webCamStream);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMic = () => {
    if (stream) {
      const track = stream.getTracks().find((track) => track.kind === "audio");
      if (track) {
        track.enabled = !track.enabled;
        setIsMicMuted(!track.enabled);
      }
    }
  };

  const handleNext = () => {};

  const handleConnectWithPartner = () => {
    if (partnerSocketId) {
      startCall(partnerSocketId);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-slate-300">
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between bg-neutral-900 p-5 border-b-[1px] border-b-slate-800 z-20">
        <div className="flex items-center space-x-5">
          <FaMusic
            size={30}
            color="white"
            className="p-1 rounded-md bg-cyan-500"
          />
          <h1 className="text-xl font-semibold text-cyan-500">GrooveSpace</h1>
        </div>
        <IoLogOutOutline size={25} color="white" className="cursor-pointer" />
      </nav>

      <div className="flex items-center justify-center mt-16 space-x-8 md:mt-24">
        <div className="w-full max-w-xs md:max-w-md p-4 rounded-lg h-[70vh] bg-neutral-900 flex flex-col justify-center items-center">
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            className="rounded-lg"
          />
          <div className="flex items-center w-full mt-6 space-x-4 justify-evenly">
            <CiMicrophoneOn
              size={25}
              color="white"
              cursor="pointer"
              onClick={toggleMic}
            />
            <CiMicrophoneOff
              size={25}
              color="white"
              cursor="pointer"
              onClick={toggleMic}
            />
            <SlCallEnd
              size={25}
              color="red"
              cursor="pointer"
              onClick={handleCallUser}
            />
            <RxTrackNext
              size={25}
              color="white"
              cursor="pointer"
              onClick={handleNext}
            />
          </div>
        </div>

        <div className="w-full max-w-xs md:max-w-md p-4 rounded-lg h-[70vh] bg-neutral-900">
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="absolute flex flex-col items-center space-y-2 transform -translate-x-1/2 bottom-10 left-1/2">
        <input
          type="text"
          placeholder="Enter Partner's Socket ID"
          value={partnerSocketId}
          onChange={(e) => setPartnerSocketId(e.target.value)}
          className="p-2 text-white bg-gray-800 rounded-md"
        />
        <button
          onClick={handleConnectWithPartner}
          className="px-4 py-2 text-white rounded-md bg-cyan-500"
        >
          Connect with Partner
        </button>
      </div>
    </div>
  );
};

export default Room;
