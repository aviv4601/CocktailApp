import React from "react";
import CocktailItem from "./CocktailItem";
import Carusel from "./Carusel";
import Apperol from "../../../assets/Apperol.png";
import whiski from "../../../assets/whiski.png";
import mojito from "../../../assets/mojito.png";
import fidgeling from "../../../assets/fidgeling.png";
import whiskeyApple from "../../../assets/whiskeyApple.jpg";
import arakGrapefruit from "../../../assets/arakGrapefruit.jpg";

const CocktailList = () => {
  console.log("image", Apperol.src);
  const cocktails = [
    {
      name: "אפרול שפריץ",
      ingredients: [
        { name: "אפרול", amount: "30 מל" },
        { name: "ראשן", amount: "30 מל" },
        { name: "ספרייט", amount: "30 מל" },
        { name: "חתכה תפוז (מיץ תפוזים)", amount: "30 מל" },
      ],
      instructions:
        "הוסף קרח לכוס יין. מוסיפים אפרול ויין מבעבע. מעל מי סודה ומערבבים. מקשטים בפרוסת תפוז.",
      image: Apperol.src,
    },
    {
      name: "וויסקי חמוץ מתוק",
      ingredients: [
        { name: "וויסקי", amount: "30 מל" },
        { name: "לימונדה", amount: "120 מל" },
        { name: "ויטמנציק פטל/ענבים", amount: "נגיעה " },
      ],
      instructions:
        "ממלאים שייקר בקרח. הוסף ויסקי, מיץ לימון וסירופ פשוט. מנערים היטב ומסננים לכוס מלאה בקרח.",
      image: whiski.src,
    },
    {
      name: "ערק מוחיטו",
      ingredients: [
        { name: "וודקה/ערק", amount: "30 מל" },
        { name: "לימונדה", amount: "120 מל" },
        { name: "עלי נענע", amount: "3-4" },
        { name: "קוביות קרח", amount: "2" },
        { name: "חתכה לימון", amount: "1" },
      ],
      instructions:
        "מערבבים חתיכות ליים ועלי נענע טריים בכוס. מוסיפים ערק ולימונדה. מערבבים היטב ומגישים על קרח. מקשטים בחתכה לימון וגבעול נענע.",
      image: mojito.src,
    },
    {
      name: "פידג'לינג מרגריטה",
      ingredients: [
        { name: "פידג'לינג", amount: "2 oz" },
        { name: "לימונדה", amount: "1 oz" },
        { name: "Agave syrup", amount: "1/2 oz" },
        { name: "מלח", amount: "טיפ טיפה" },
      ],
      instructions:
        "שפשפו טריז ליים סביב שפת הכוס. טובלים את השפה במלח. הוסף קרח לכוס. מוסיפים קשקושים, מיץ ליים וסירופ אגבה. מערבבים היטב. מקשטים בפריזת ליים.",
      image: fidgeling.src,
    },
    {
      name: "שפריץ קלאסי",
      ingredients: [
        { name: "יין", amount: "120 מל" },
        { name: "סודה", amount: "120 מל" },
        { name: "נענע", amount: "3-4" },
      ],
      instructions:
        "ממלאים שייקר בקרח. מוסיפים אפרול וסודה. מנערים היטב ומסננים לכוס מלאה בקרח. הוסף שפריץ של נענע.",
      image: whiskeyApple.src,
    },
    {
      name: "בועות תפוחיות",
      ingredients: [
        { name: "יין מבעבע בטעם תפוח ", amount: "120 מל" },
        { name: "מיץ תפוזים", amount: "60 מל" },
        { name: "סודה", amount: "30 מל" },
        { name: "חתכה תפוח", amount: "1" },
      ],
      instructions:
        "ממלאים שייקר בקרח. מוסיפים יין מבעבע בטעם תפוח ומיץ תפוזים. מנערים היטב ומסננים לכוס מלאה בקרח. הוסיפו שפריץ של מי סודה וכמה טיפות דבש למתיקות, אם רוצים. מקשטים בחתכה תפוח.",
      image: arakGrapefruit.src,
    },
  ];

  return (
    <div>
      <Carusel cocktails={cocktails} />
    </div>
  );
};

export default CocktailList;
