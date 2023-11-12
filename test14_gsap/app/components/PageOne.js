const PageOne = () => {
  return (
    <div style={{ 
      gridArea: 'page1',
      width: '100vw', 
      height: '100vh', 
      backgroundColor: 'lightblue' 
    }}>
      <p>Page 1</p>
      <p>Scroll down for the next page</p>
    </div>
  );
};

export default PageOne;