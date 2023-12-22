function generateExamFields() {
  const examCount = parseInt(document.getElementById("examCount").value);

  
  document.getElementById("examDetails").innerHTML = "";

  for (let i = 1; i <= examCount; i++) {
    const group = document.createElement("div");
    group.classList.add("group");

    group.innerHTML = `
      <label for="vize${i}Katsayi">Sınav ${i} Katsayı:</label>
      <input type="number" id="vize${i}Katsayi" step="0.01">
      <label for="vize${i}Sapma">Sınav ${i} Standart Sapma:</label>
      <input type="number" id="vize${i}Sapma" step="0.01">
      <label for="vize${i}Kisi">Kişi Sayısı:</label>
      <input type="number" id="vize${i}Kisi">
      <label for="vize${i}Ort">Sınav ${i} Ortalama:</label>
      <input type="number" id="vize${i}Ort" step="0.01">
      <label for="vize${i}Not">Notunuz:</label>
      <input type="number" id="vize${i}Not">
    `;

    document.getElementById("examDetails").appendChild(group);
  }
}

function calculateCommonSapma() {
  const examCount = parseInt(document.getElementById("examCount").value);

  let totalSapma = 0;
  let totalOrt = 0;
  let totalNot = 0;
  let totalKatsayi = 0;
  let totalKisi = 0; 

  for (let i = 1; i <= examCount; i++) {
    const katsayi = parseFloat(document.getElementById(`vize${i}Katsayi`).value);
    const sapma = parseFloat(document.getElementById(`vize${i}Sapma`).value);
    const kisi = parseFloat(document.getElementById(`vize${i}Kisi`).value);
    const ort = parseFloat(document.getElementById(`vize${i}Ort`).value);
    const not = parseFloat(document.getElementById(`vize${i}Not`).value);

    totalKatsayi += katsayi;
    totalSapma += kisi * sapma ** 2;
    totalOrt += ort * katsayi;
    totalNot += not * katsayi;
    totalKisi += kisi; 
  }

  const totalOrtWeighted = totalOrt / totalKatsayi;
  const totalNotWeighted = totalNot / totalKatsayi;

  totalSapma = Math.sqrt(totalSapma / totalKisi); 

  const result =  (10 * (totalNotWeighted - totalOrtWeighted) / totalSapma) + 50;

  document.getElementById("result").textContent = result.toFixed(2);
  document.getElementById("totalOrt").textContent = totalOrtWeighted.toFixed(2);
let harfNotu = "";

if (totalOrtWeighted >= 80) {
  if (result >= 57) harfNotu = "AA";
  else if (result >= 54 && result < 57) harfNotu = "BA+";
  else if (result >= 52 && result < 54) harfNotu = "BA";
  else if (result >= 49 && result < 52) harfNotu = "BB+";
  else if (result >= 47 && result < 49) harfNotu = "BB";
  else if (result >= 44 && result < 47) harfNotu = "CB+";
  else if (result >= 42 && result < 44) harfNotu = "CB";
  else if (result >= 39 && result < 42) harfNotu = "CC+";
  else if (result >= 37 && result < 39) harfNotu = "CC";
  else if (result >= 34 && result < 37) harfNotu = "DC+";
  else if (result >= 32 && result < 34) harfNotu = "DC";
  else if (result >= 29 && result < 32) harfNotu = "DD+";
  else if (result >= 27 && result < 29) harfNotu = "DD";
  else harfNotu = "FF";
} 
else if(totalOrtWeighted >= 70 && totalOrtWeighted < 80){
  if (result >= 59) harfNotu = "AA";
  else if (result >= 56 && result < 59) harfNotu = "BA+";
  else if (result >= 54 && result < 56) harfNotu = "BA";
  else if (result >= 51 && result < 54) harfNotu = "BB+";
  else if (result >= 49 && result < 51) harfNotu = "BB";
  else if (result >= 46 && result < 49) harfNotu = "CB+";
  else if (result >= 44 && result < 46) harfNotu = "CB";
  else if (result >= 41 && result < 44) harfNotu = "CC+";
  else if (result >= 39 && result < 41) harfNotu = "CC";
  else if (result >= 36 && result < 39) harfNotu = "DC+";
  else if (result >= 34 && result < 36) harfNotu = "DC";
  else if (result >= 31 && result < 34) harfNotu = "DD+";
  else if (result >= 29 && result < 31) harfNotu = "DD";
  else harfNotu = "FF";
}
else if(totalOrtWeighted >= 62.5 && totalOrtWeighted < 70){
  if (result >= 61) harfNotu = "AA";
  else if (result >= 58 && result < 61) harfNotu = "BA+";
  else if (result >= 56 && result < 58) harfNotu = "BA";
  else if (result >= 53 && result < 56) harfNotu = "BB+";
  else if (result >= 51 && result < 53) harfNotu = "BB";
  else if (result >= 48 && result < 51) harfNotu = "CB+";
  else if (result >= 46 && result < 48) harfNotu = "CB";
  else if (result >= 43 && result < 46) harfNotu = "CC+";
  else if (result >= 41 && result < 43) harfNotu = "CC";
  else if (result >= 38 && result < 41) harfNotu = "DC+";
  else if (result >= 36 && result < 38) harfNotu = "DC";
  else if (result >= 33 && result < 36) harfNotu = "DD+";
  else if (result >= 31 && result < 33) harfNotu = "DD";
  else harfNotu = "FF";
}
else if(totalOrtWeighted >= 57.5 && totalOrtWeighted < 62.5){
  if (result >= 63) harfNotu = "AA";
  else if (result >= 60 && result < 63) harfNotu = "BA+";
  else if (result >= 58 && result < 60) harfNotu = "BA";
  else if (result >= 55 && result < 58) harfNotu = "BB+";
  else if (result >= 53 && result < 55) harfNotu = "BB";
  else if (result >= 50 && result < 53) harfNotu = "CB+";
  else if (result >= 48 && result < 50) harfNotu = "CB";
  else if (result >= 45 && result < 48) harfNotu = "CC+";
  else if (result >= 43 && result < 45) harfNotu = "CC";
  else if (result >= 40 && result < 43) harfNotu = "DC+";
  else if (result >= 38 && result < 40) harfNotu = "DC";
  else if (result >= 35 && result < 38) harfNotu = "DD+";
  else if (result >= 33 && result < 35) harfNotu = "DD";
  else harfNotu = "FF";
}
else if(totalOrtWeighted >= 52.5 && totalOrtWeighted < 57.5){
  if (result >= 65) harfNotu = "AA";
  else if (result >= 62 && result < 65) harfNotu = "BA+";
  else if (result >= 60 && result < 62) harfNotu = "BA";
  else if (result >= 57 && result < 60) harfNotu = "BB+";
  else if (result >= 55 && result < 57) harfNotu = "BB";
  else if (result >= 52 && result < 55) harfNotu = "CB+";
  else if (result >= 50 && result < 52) harfNotu = "CB";
  else if (result >= 47 && result < 50) harfNotu = "CC+";
  else if (result >= 45 && result < 47) harfNotu = "CC";
  else if (result >= 42 && result < 45) harfNotu = "DC+";
  else if (result >= 40 && result < 42) harfNotu = "DC";
  else if (result >= 37 && result < 40) harfNotu = "DD+";
  else if (result >= 35 && result < 37) harfNotu = "DD";
  else harfNotu = "FF";
}
else if(totalOrtWeighted >= 47.5 && totalOrtWeighted < 52.5){
  if (result >= 67) harfNotu = "AA";
  else if (result >= 64 && result < 67) harfNotu = "BA+";
  else if (result >= 62 && result < 64) harfNotu = "BA";
  else if (result >= 59 && result < 62) harfNotu = "BB+";
  else if (result >= 57 && result < 59) harfNotu = "BB";
  else if (result >= 54 && result < 57) harfNotu = "CB+";
  else if (result >= 52 && result < 54) harfNotu = "CB";
  else if (result >= 49 && result < 52) harfNotu = "CC+";
  else if (result >= 47 && result < 49) harfNotu = "CC";
  else if (result >= 44 && result < 47) harfNotu = "DC+";
  else if (result >= 42 && result < 44) harfNotu = "DC";
  else if (result >= 39 && result < 42) harfNotu = "DD+";
  else if (result >= 37 && result < 39) harfNotu = "DD";
  else harfNotu = "FF";
}
else if(totalOrtWeighted >= 42.5 && totalOrtWeighted < 47.5){
  if (result >= 69) harfNotu = "AA";
  else if (result >= 66 && result < 69) harfNotu = "BA+";
  else if (result >= 64 && result < 66) harfNotu = "BA";
  else if (result >= 61 && result < 64) harfNotu = "BB+";
  else if (result >= 59 && result < 61) harfNotu = "BB";
  else if (result >= 56 && result < 59) harfNotu = "CB+";
  else if (result >= 54 && result < 56) harfNotu = "CB";
  else if (result >= 51 && result < 54) harfNotu = "CC+";
  else if (result >= 49 && result < 51) harfNotu = "CC";
  else if (result >= 46 && result < 49) harfNotu = "DC+";
  else if (result >= 44 && result < 46) harfNotu = "DC";
  else if (result >= 41 && result < 44) harfNotu = "DD+";
  else if (result >= 39 && result < 41) harfNotu = "DD";
  else harfNotu = "FF";
}
else if(totalOrtWeighted < 42.5){
  if (result >= 71) harfNotu = "AA";
  else if (result >= 68 && result < 71) harfNotu = "BA+";
  else if (result >= 66 && result < 68) harfNotu = "BA";
  else if (result >= 63 && result < 66) harfNotu = "BB+";
  else if (result >= 61 && result < 63) harfNotu = "BB";
  else if (result >= 58 && result < 61) harfNotu = "CB+";
  else if (result >= 56 && result < 58) harfNotu = "CB";
  else if (result >= 53 && result < 56) harfNotu = "CC+";
  else if (result >= 51 && result < 53) harfNotu = "CC";
  else if (result >= 48 && result < 51) harfNotu = "DC+";
  else if (result >= 46 && result < 48) harfNotu = "DC";
  else if (result >= 43 && result < 46) harfNotu = "DD+";
  else if (result >= 41 && result < 43) harfNotu = "DD";
  else harfNotu = "FF";
}
 else{
     harfNotu="Sistem harf notunuzu hesaplayamadı.";
 }
document.getElementById("harfNotuDisplay").textContent = "Harf Notun: " + harfNotu;
}

document.getElementById("examCount").addEventListener("change", generateExamFields);

generateExamFields();
