export default function WhatsAppButton() {
  const phoneNumber = "+234 916 485 1072";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
    >
      WhatsApp
    </button>
  );
}