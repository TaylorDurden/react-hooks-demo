import { forwardRef, LegacyRef, useEffect, useRef, useState } from "react"

const Input = (props: any, ref: LegacyRef<HTMLInputElement>) => {
  // const ref = useRef<HTMLInputElement>(null);
  // component will receive props
  // shouldComponentUpdate
  useEffect(() => {
    console.log(`value changed ${props.value}`);
    // ref!.current!.value = props.initialValue;
  }, []); // 只要props.value变更了，就会触发

  return <input ref={ref} onChange={(e) => props.onChange(e.target.value)}></input>
}

const MInput = forwardRef(Input);

export default (props: any) => {
  // const [count, setCount] = useState(0);
  const [value, setValue] = useState('')
  const [count, setCount] = useState(() => {
    return 0;
  });
  const r1 = useRef<HTMLInputElement>(null);
  const r2 = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count => count+1)
  //   }, 1000);
  //   return () => {
  //     clearInterval(1)
  //   }
  // }, [Math.min(count, 4)]);

  useEffect(() => {
    console.log('component did mount');
    return () => {
      console.log('component will unmount');
    }
  })

  useEffect(() => {

  }, [props.value])

  return <div>
    {/* {count}
    <button onClick={() => setCount(count => count+1)}>+1</button>
    <button onClick={() => setCount(count+1)}>+1</button> */}
    <MInput ref={r1} initialValue={100} onChange={(x: any) => console.log("1: " + x)}></MInput>
    <MInput ref={r2} initialValue={'hello'} onChange={(x: any) => console.log("2: " + x)}></MInput>
    <p>
      <button onClick={() => r1.current!.focus()}>focus on r1</button>
      <button onClick={() => r2.current!.focus()}>focus on r2</button>
    </p>


    <Input value={value}></Input>
    <button onClick={() => setValue(Math.random().toString())}>Click me</button>
  </div>
}