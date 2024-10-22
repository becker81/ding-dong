import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from 'react-three-fiber'
import './styles.css'

function Thing1() {
  const ref = useRef()
  useFrame(() => ((ref.current.rotation.x += 0.01), (ref.current.rotation.y = 0), (ref.current.rotation.z = 1.57)))
  return (
    <mesh
      ref={ref}
      onClick={(e) => console.log('click')}
      onPointerOver={(e) => console.log('hover')}
      onPointerOut={(e) => console.log('unhover')}>
      <cylinderBufferGeometry attach="geometry" args={[0.15, 0.15, 10, 6]} />
      <meshNormalMaterial attach="material" flatShading={[true]} />
      <meshStandardMaterial color="red" flatShading={[true]} />
    </mesh>
  )
}
function Thing2() {
  const ref = useRef()
  useFrame(() => ((ref.current.rotation.x += 0.01), (ref.current.rotation.y = 0), (ref.current.rotation.z = 1.57)))
  return (
    <mesh
      ref={ref}
      onClick={(e) => console.log('click')}
      onPointerOver={(e) => console.log('hover')}
      onPointerOut={(e) => console.log('unhover')}>
      <cylinderBufferGeometry attach="geometry" args={[0.15, 0.15, 10, 6]} />
      <meshNormalMaterial attach="material" />
      <meshStandardMaterial wireframe color="white" />
    </mesh>
  )
}

ReactDOM.render(
  <Canvas>
    <color attach="background" args={'#454545'} />
    <ambientLight />
    <pointLight position={[10, 10, 10]} intensity={1} />

    <Thing1 />
  </Canvas>,
  document.getElementById('root')
)
