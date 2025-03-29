import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Peer from "peerjs";

const socket = io("http://localhost:5000");

const App = () => {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [peerId, setPeerId] = useState(null);
  const [remotePeerId, setRemotePeerId] = useState("Waiting...");
  const [call, setCall] = useState(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    const peer = new Peer();
    peerRef.current = peer;

    peer.on("open", (id) => {
      setPeerId(id);
      setCurrentUserId(id);
      socket.emit("registerPeer", id);
    });

    peer.on("call", (incomingCall) => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          streamRef.current = stream;
          localVideoRef.current.srcObject = stream;
          incomingCall.answer(stream);
          incomingCall.on("stream", (remoteStream) => {
            remoteVideoRef.current.srcObject = remoteStream;
          });

          setCall(incomingCall);
        });
    });

    // ✅ Fix: Listen for matchFound event
    socket.on("matchFound", ({ peerId }) => {
      setRemotePeerId(peerId);
      console.log("Matched with:", peerId);
    });

    return () => {
      peer.disconnect();
    };
  }, []);

  const handleCallUser = () => {
    if (remotePeerId === "Waiting...") {
      alert("No match found yet!");
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        streamRef.current = stream;
        localVideoRef.current.srcObject = stream;
        const outgoingCall = peerRef.current.call(remotePeerId, stream);
        outgoingCall.on("stream", (remoteStream) => {
          remoteVideoRef.current.srcObject = remoteStream;
        });
        setCall(outgoingCall);
      });
  };

  const handleEndCall = () => {
    if (call) {
      call.close();
      setCall(null);
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    localVideoRef.current.srcObject = null;
    remoteVideoRef.current.srcObject = null;
  };

  return (
    <div className="bg-black w-screen h-screen overflow-clip text-slate-300">
      <nav className="bg-stone-900 p-8">
        <h1 className="text-xl font-semibold">Match-ur-Tribe</h1>
      </nav>

      <h2>Your ID: {currentUserId}</h2>
      <h2>Matched with: {remotePeerId}</h2>

      <button onClick={handleCallUser}>Start Call</button>
      <button onClick={handleEndCall}>End Call</button>

      <div className="max-w-md">
        <h3>Local Video</h3>
        <video ref={localVideoRef} autoPlay playsInline muted />
      </div>
      <div className="max-w-md">
        <h3>Remote Video</h3>
        <video ref={remoteVideoRef} autoPlay playsInline />
      </div>
    </div>
  );
};

export default App;
