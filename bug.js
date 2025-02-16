```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // Missing cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```