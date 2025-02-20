import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function WebApp() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
    }
  }, []);

  const sendDataToBot = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData(
        JSON.stringify({ message: "Пользователь ввел симптомы" })
      );
    }
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold mb-4">Ваш урологический помощник</h1>
      <p>Введите симптомы, и бот предложит возможные рекомендации.</p>
      <Button onClick={sendDataToBot} className="mt-4">Отправить в бот</Button>
    </div>
  );
}
