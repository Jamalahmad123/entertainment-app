const Container = ({ children, className = "" }) => {
  return (
    <main className={`p-4 flex flex-col mt-6 md:ml-32 ${className}`}>
      {children}
    </main>
  );
};

export default Container;
