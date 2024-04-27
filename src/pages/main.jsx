import React, { useState } from 'react';
import "./main.css";
import Case1 from '../image/img.png';
import Case2 from '../image/treasure.png';

function App() {
    const [opened, setOpened] = useState(false); // Состояние, указывающее, открыт ли кейс

    const [image, setImage] = useState(Case1); // Изначально показываем первое изображение
    const [amount, setAmount] = useState("Case"); // Изначально устанавливаем надпись "Case"

    const openCase = () => {
        // Проверяем, не был ли кейс уже открыт
        if (!opened) {
            // Генерируем случайную сумму от -500 до 10000
            const randomAmount = Math.floor(Math.random() * (10000 - (-500) + 1)) - 500;
            setAmount(`$${randomAmount}`); // Устанавливаем сгенерированную сумму

            // Генерируем случайное изображение
            setImage(Case2); // Устанавливаем второе изображение
            // Устанавливаем, что кейс открыт
            setOpened(true);
        }
    };

    return (
        <div className="box">
            <h1>{amount}</h1>
            <img src={image} alt="" /> {/* Показываем изображение */}
            <button className="openButton" onClick={openCase} disabled={opened}>Open Case</button> {/* Кнопка неактивна, если кейс уже открыт */}
        </div>
    );
}

export default App;
