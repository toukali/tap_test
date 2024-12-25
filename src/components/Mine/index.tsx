/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { ref, get, set, getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDpSvAtYkV04l_dEvfSBIt1C819hnwDrnA",
	authDomain: "ecotap-2e9fe.firebaseapp.com",
	projectId: "ecotap-2e9fe",
	storageBucket: "ecotap-2e9fe.firebasestorage.app",
	databaseURL: "https://ecotap-2e9fe-default-rtdb.firebaseio.com",
	messagingSenderId: "1054886136292",
	appId: "1:1054886136292:web:c9f5862b30d687de171ff1",
	measurementId: "G-EZHVV5L0MN"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
import coin from "../../assets/images/coin.webp";
import LevelBar from "./LevelBar";
import StatusBar from "./StatusBar";

interface FloatingText {
    id: number;
    x: number;
    y: number;
}

const Mine = () => {
    const maxEnergy = 200;
    const [value, setValue] = useState(0);
    const [energy, setEnergy] = useState(maxEnergy);
    const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
    const [nextId, setNextId] = useState(0);
    const user = "ss";
    useEffect(() => {
		/*const user = auth.currentUser;*/
		
		if (user) {
		  /*const userId = user.uid;*/
		  const userId = "ss";
		  const valueRef = ref(database, `users/${userId}/value`);
		  const energyRef = ref(database, `users/${userId}/energy`);
	
		  get(valueRef).then((snapshot) => {
			if (snapshot.exists()) {
			  setValue(snapshot.val());
			}
		  });
	
		  get(energyRef).then((snapshot) => {
			if (snapshot.exists()) {
			  setEnergy(snapshot.val());
			}
		  });
		}
	  }, []);

    const handleClick = (e: any) => {
		/*const user = auth.currentUser;*/
		
		if (user && energy > 0) {
			/*const userId = user.uid;*/
			const userId = "ss";
			const newValue = value + 1;
			const newEnergy = energy > 0 ? energy - 1 : 0;
	  
			setValue(newValue);
			setEnergy(newEnergy);
	  
			set(ref(database, `users/${userId}/value`), newValue);
			set(ref(database, `users/${userId}/energy`), newEnergy);
	  
			const { clientX: x, clientY: y } = e;
			const newText: FloatingText = { id: nextId, x, y };
			setFloatingTexts((prev) => [...prev, newText]);
			setNextId((prev) => prev + 1);
	  
			setTimeout(() => {
			  setFloatingTexts((prev) => prev.filter((text) => text.id !== newText.id));
			}, 36000);
		  }
		};

    const energyPercentage = (energy / maxEnergy) * 100;

    useEffect(() => {
      /*const user = auth.currentUser;*/
      const userId = "ss";
        const interval = setInterval(() => {
            setEnergy((prevEnergy) => {
                if (prevEnergy < maxEnergy) {
                    const newEnergy = prevEnergy + 1;
                    set(ref(database, `users/${userId}/energy`), newEnergy);
                    return newEnergy;
                }
                return prevEnergy;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full flex flex-col justify-between py-4">
            <LevelBar />
            <StatusBar />
            <div className="w-full flex items-center justify-center">
                <span className="font-bold text-[60px]">{value.toLocaleString()}</span><span className="text-[13px] text-[#9fa0a7]">seeds</span>
            </div>
            <div className="flex items-center justify-center">
                <img
                    src={coin}
                    alt="coin"
                    onClick={handleClick}
                    className="w-[90%] cursor-pointer drop-shadow-2xl coin-button"
                />
            </div>
            <div className="w-full flex flex-col gap-3">
                <div className="flex w-full items-center justify-between">
                    <span className="text-[15px]">Energy</span>
                    <span className="text-[15px] font-semibold">
                        {energy} / {maxEnergy}
                    </span>
                </div>
                <div className="w-full relative rounded-full h-[16px] bg-[#012237] border border-[#073755]">
                    <div
                        className="absolute left-0 h-full rounded-full bg-gradient-to-r from-[#dc7b0c] to-[#fff973]"
                        style={{ width: `${energyPercentage}%` }}
                    ></div>
                </div>
            </div>
            {floatingTexts.map((text) => (
                <span
                    className="floating-text font-semibold text-[30px]"
                    key={text.id}
                    style={{ top: text.y, left: text.x }}
                >
                    +1 seed
                </span>
            ))}
        </div>
    );
};

export default Mine;
