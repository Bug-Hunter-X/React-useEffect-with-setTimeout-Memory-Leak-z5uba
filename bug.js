```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting state inside a setTimeout without cleanup
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}
```