import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, DollarSign, Home, Power, RefreshCw } from 'lucide-react';
import "./RatRacePauseMenu.css";

const RatRacePauseMenu = () => {
    const [selected, setSelected] = useState(0);

    const menuItems = [
        { label: "Get a Job & Earn a Salary", description: "😂 Welcome to the rat race", icon: <Play size={22} /> },
        { label: "Pay Your Bills", description: "😈 You thought all that money was yours? Lmfao sike! Don't forget to pay them taxes too nigga.",  icon: <DollarSign size={22} /> },
        { label: "Save & Grind", description: "👏🏾 Well done... you seem to be getting a hang of this game. But don't get too comfortable. It would be a shame if a random emergency were to pop up. Hehe 🙃",  icon: <Home size={22} /> },
        { label: "Rinse & Repeat", description: "💪🏾Let's go baby! Get back in there! You're La Gran Rata!!",  icon: <RefreshCw size={22} /> },
        { label: "End Race", description: "🏁 Are you sure you want to end the race? Do you have enough money? Are you fine without it? Are you sure? He-Hello? Anyone there? Are you dead?",  icon: <Power size={22} /> },
    ];

    return (
        <div style={{ position: 'relative', maxWidth: '100vw' }}>
            <motion.div
                className="pause-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <motion.div
                    className="pause-menu"
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 12 }}
                >
                    <h1 className="menu-title">🐀 RAT RACE</h1>

                    <ul className="menu-list">
                        {menuItems.map((item, index) => (
                            <motion.li
                                key={item.label}
                                className={`menu-item ${selected === index ? "selected" : ""}`}
                                onClick={() => setSelected(index)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span className="menu-icon">{item.icon}</span>
                                <span>{item.label}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <motion.div
                        className="menu-footer"
                        key={selected}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {menuItems[selected].description}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default RatRacePauseMenu;