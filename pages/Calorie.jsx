import React, { useState } from "react";
import "../styles/calorie.css";

function Calorie() {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState(""); 
  const [activity, setActivity] = useState(1.2); 
  const [result, setResult] = useState(null);

  const calculateCalories = () => {
    if (!age || !height || !weight || !gender) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    let BMR;
    if (gender === "male") {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const TDEE = BMR * activity;
    setResult(TDEE.toFixed(2)); 
  };

  return (
    <div className="calculator">
      <h1> Günlük Ne kadar Kalori İhtiyacın Olduğunu Öğren!</h1>
      <div>
        <label>Cinsiyet:</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Erkek
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Kadın

        <p>Yaş :</p>
        <input
          type="number"
          placeholder="Yaşınızı giriniz..."
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <p>Boy (cm):</p>
        <input
          type="number"
          placeholder="cm"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <p>Kilo (kg):</p>
        <input
          type="number"
          placeholder="kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <p>Aktivite Düzeyi:</p>
        <select onChange={(e) => setActivity(parseFloat(e.target.value))}>
          <option value="1.2">Sedanter Birey (Aktivite yok)</option>
          <option value="1.375">Hafif Egzersiz (Haftada 1-2 gün)</option>
          <option value="1.55">Ortalama Egzersiz (Haftada 3-5 gün)</option>
          <option value="1.725">Ağır Egzersiz (Haftada 5-7 gün)</option>
          <option value="1.9">Profesyonel Atlet (Günde 2)</option>
        </select>

        <button onClick={calculateCalories}>Hesapla</button>

        {result && <h2>Günlük Kalori İhtiyacın: {result} kcal</h2>}
      </div>
    </div>
  );
}

export default Calorie;
