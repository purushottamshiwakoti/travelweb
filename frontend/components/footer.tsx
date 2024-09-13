export const Footer = () => {
  const date = new Date();
  return (
    <footer className="h-10  flex items-center justify-center shadow-md border-t   ">
      <p className=""> © {date.getFullYear()} Travels. All rights reserved.</p>
    </footer>
  );
};
