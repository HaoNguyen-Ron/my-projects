// pages/index.js
import { useState } from "react";

const PaymentMethod = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("c"); // Mặc định là tiếng Trung

  const handleCheckboxChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      <select>
        <option value="a">Tiếng Anh</option>
        <option value="a">Tiếng Anh</option>

      </select>
    </div>
  );
};

export default PaymentMethod;
