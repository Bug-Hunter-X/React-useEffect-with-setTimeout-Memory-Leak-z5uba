```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Cleanup function to cancel the timer
    return () => clearTimeout(timer);
  }, [count]);

  return <div>Count: {count}</div>;
}
```