/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 piper_pa18.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/piper_pa18.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.fuselage01.geometry} material={materials.base} position={[0, 127.115, 286.749]} rotation={[0, Math.PI / 2, 0]} scale={100}>
        <mesh geometry={nodes.exhaust.geometry} material={materials.internals_alu} position={[0.432, -0.443, -0.184]} rotation={[-1.198, -0.222, -Math.PI / 2]} />
        <mesh geometry={nodes.engine01.geometry} material={materials.internals_b} position={[-0.096, -0.038, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.engine05.geometry} material={materials.internals_b} position={[-0.07, -0.038, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.engine08.geometry} material={materials.internals_b} position={[-0.07, -0.038, -0.01]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.engine07.geometry} material={materials.internals_alu} position={[-0.07, -0.038, -0.01]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.engine06.geometry} material={materials.internals_alu} position={[-0.07, -0.038, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.fuselage_door02.geometry} material={materials.base} />
        <mesh geometry={nodes.fuselage_door.geometry} material={materials.base} />
        <mesh geometry={nodes.interior_seat.geometry} material={materials.internals_b} position={[1.179, -0.359, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.interior_panel.geometry} material={materials.internals_b} position={[0.719, 0.208, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.fuselage08.geometry} material={materials.base} position={[1.365, 0.347, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.fuselage11.geometry} material={materials.base} />
        <mesh geometry={nodes.interior_frame02.geometry} material={materials.internals_b} position={[1.379, 0.698, 0.307]} rotation={[-1.005, 0.852, 2.104]} />
        <mesh geometry={nodes.fuselage10.geometry} material={materials.base} />
        <mesh geometry={nodes.interior_frame03.geometry} material={materials.internals_b} position={[1.379, 0.698, -0.307]} rotation={[1.006, -0.852, -0.39]} />
        <mesh geometry={nodes.interior_frame01.geometry} material={materials.internals_b} position={[1.388, 0.719, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.fuselage09.geometry} material={materials.base} position={[1.776, 0.757, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.engine03.geometry} material={materials.internals_alu} position={[-0.204, -0.28, 0]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.engine04.geometry} material={materials.internals_alu} position={[-0.203, -0.32, -0.086]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.fuselage07.geometry} material={materials.base} position={[-0.184, -0.301, 0]} />
        <mesh geometry={nodes.engine02.geometry} material={materials.internals_alu} position={[-0.204, -0.038, 0]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.fuselage03.geometry} material={materials.base}>
          <mesh geometry={nodes.engine09.geometry} material={materials.internals_b} position={[-0.014, -0.449, 0]} rotation={[Math.PI / 2, -1.421, Math.PI / 2]}>
            <mesh geometry={nodes.engine10.geometry} material={materials.internals_b} position={[0, 0, 0.066]} />
          </mesh>
          <mesh geometry={nodes.fuselage04.geometry} material={materials.base} />
          <mesh geometry={nodes.fuselage05.geometry} material={materials.base} />
          <mesh geometry={nodes.fuselage06.geometry} material={materials.base} />
        </mesh>
        <mesh geometry={nodes.fuselage02.geometry} material={materials.base}>
          <mesh geometry={nodes.prop_tip01.geometry} material={materials.base} position={[-0.48, -0.038, 0]} rotation={[Math.PI / 4, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.prop_tip02.geometry} material={materials.base} position={[0, 0, -0.218]} rotation={[0, 0, Math.PI / 4]} />
            <mesh geometry={nodes.prop01.geometry} material={materials.prop} position={[0, 0, -0.196]} rotation={[Math.PI / 2, 0, -Math.PI]} />
            <mesh geometry={nodes.prop02.geometry} material={materials.prop} position={[0, 0, -0.196]} rotation={[-Math.PI / 2, 0, 0]} />
          </mesh>
          <mesh geometry={nodes.fuselage_lock01003.geometry} material={materials.base} position={[0, -0.289, -0.297]} rotation={[2.303, -0.19, 1.557]}>
            <mesh geometry={nodes.fuselage_lock02002.geometry} material={materials.internals_alu} position={[0.041, 0, -0.003]} rotation={[0, 0.275, 0]}>
              <mesh geometry={nodes['pin02-1002'].geometry} material={materials.internals_alu} position={[0.046, 0, 0.001]}>
                <mesh geometry={nodes['pin02-2002'].geometry} material={materials.internals_alu} position={[0, 0, 0.004]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
              </mesh>
            </mesh>
          </mesh>
          <mesh geometry={nodes.fuselage_lock01002.geometry} material={materials.base} position={[0.383, -0.345, -0.354]} rotation={[2.493, -0.198, 1.602]}>
            <mesh geometry={nodes.fuselage_lock02003.geometry} material={materials.internals_alu} position={[0.041, 0, -0.003]} rotation={[0, 0.21, 0]}>
              <mesh geometry={nodes['pin02-1003'].geometry} material={materials.internals_alu} position={[0.046, 0, 0.001]}>
                <mesh geometry={nodes['pin02-2003'].geometry} material={materials.internals_alu} position={[0, 0, 0.004]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
              </mesh>
            </mesh>
          </mesh>
          <mesh geometry={nodes.fuselage_lock01001.geometry} material={materials.base} position={[0, -0.289, 0.297]} rotation={[0.851, -0.207, -1.557]}>
            <mesh geometry={nodes.fuselage_lock02001.geometry} material={materials.internals_alu} position={[0.041, 0, -0.003]} rotation={[0, 0.275, 0]}>
              <mesh geometry={nodes['pin02-1001'].geometry} material={materials.internals_alu} position={[0.046, 0, 0.001]}>
                <mesh geometry={nodes['pin02-2'].geometry} material={materials.internals_alu} position={[0, 0, 0.004]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
              </mesh>
            </mesh>
          </mesh>
          <mesh geometry={nodes.fuselage_lock01.geometry} material={materials.base} position={[0.383, -0.345, 0.354]} rotation={[0.648, -0.216, -1.602]}>
            <mesh geometry={nodes.fuselage_lock02.geometry} material={materials.internals_alu} position={[0.041, 0, -0.003]} rotation={[0, 0.21, 0]}>
              <mesh geometry={nodes['pin02-1'].geometry} material={materials.internals_alu} position={[0.046, 0, 0.001]}>
                <mesh geometry={nodes['pin02-2001'].geometry} material={materials.internals_alu} position={[0, 0, 0.004]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
              </mesh>
            </mesh>
          </mesh>
        </mesh>
        <mesh geometry={nodes.horizontal_stab01.geometry} material={materials.base} position={[5.693, 0.323, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.elevator01.geometry} material={materials.base} position={[0, 0.272, 0.023]} />
        </mesh>
        <mesh geometry={nodes.pin03001.geometry} material={materials.base} position={[5.875, 0.886, -0.025]} rotation={[1.024, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.rudder13.geometry} material={materials.base} position={[0.011, 0, 0.004]}>
            <mesh geometry={nodes.wire_R01.geometry} material={materials.base} position={[0.041, 0, -0.004]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.rudder12.geometry} material={materials.base} position={[-0.004, 0, 0.953]} rotation={[Math.PI, Math.PI / 2, 0]} />
            </mesh>
          </mesh>
        </mesh>
        <mesh geometry={nodes.pin03.geometry} material={materials.base} position={[5.875, 0.886, 0.025]} rotation={[2.117, 0, Math.PI / 2]}>
          <mesh geometry={nodes.rudder10.geometry} material={materials.base} position={[0.011, 0, 0.004]}>
            <mesh geometry={nodes.wire_L01.geometry} material={materials.base} position={[0.041, 0, -0.004]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.rudder09.geometry} material={materials.base} position={[-0.004, 0, 0.953]} rotation={[-Math.PI, Math.PI / 2, 0]} />
            </mesh>
          </mesh>
        </mesh>
        <mesh geometry={nodes.rudder05.geometry} material={materials.internals_alu} position={[5.875, 0.027, 0]} rotation={[-Math.PI / 2, -0.154, -Math.PI / 2]}>
          <mesh geometry={nodes.pin05001.geometry} material={materials.base} position={[0.079, 0, 0.005]} rotation={[-0.154, -0.353, 0]}>
            <mesh geometry={nodes.rudder06.geometry} material={materials.base} position={[0.011, 0, 0.004]}>
              <mesh geometry={nodes.wire_L02.geometry} material={materials.base} position={[0.041, 0, -0.004]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.rudder08.geometry} material={materials.base} position={[-0.004, 0, 0.803]} rotation={[-Math.PI, Math.PI / 2, 0]}>
                  <mesh geometry={nodes.pin04.geometry} material={materials.base} position={[0.01, 0, 0.011]} rotation={[0, -0.353, 0]} />
                </mesh>
              </mesh>
            </mesh>
          </mesh>
          <mesh geometry={nodes.pin05.geometry} material={materials.base} position={[-0.079, 0, 0.005]} rotation={[-0.154, 0.353, -Math.PI]}>
            <mesh geometry={nodes.rudder07.geometry} material={materials.base} position={[0.011, 0, 0.004]}>
              <mesh geometry={nodes.wire_R02.geometry} material={materials.base} position={[0.041, 0, -0.004]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.rudder11.geometry} material={materials.base} position={[-0.004, 0, 0.803]} rotation={[-Math.PI, Math.PI / 2, 0]}>
                  <mesh geometry={nodes.pin04001.geometry} material={materials.base} position={[0.01, 0, 0.011]} rotation={[0, -0.353, 0]} />
                </mesh>
              </mesh>
            </mesh>
          </mesh>
        </mesh>
        <mesh geometry={nodes.rudder_frame03.geometry} material={materials.internals_alu} position={[6, 0.047, 0]} rotation={[-1.964, -0.833, -1.851]} />
        <mesh geometry={nodes.rudder_frame02.geometry} material={materials.internals_alu} position={[6, 0.047, 0]} rotation={[-1.177, -0.833, -1.291]} />
        <mesh geometry={nodes.rudder_frame04.geometry} material={materials.internals_alu} position={[6, 0.046, 0]} rotation={[0.731, -1.384, 0.723]} />
        <mesh geometry={nodes.rudder_frame05.geometry} material={materials.internals_alu} position={[6, 0.046, 0]} rotation={[2.41, -1.384, 2.419]} />
        <mesh geometry={nodes.rudder_frame01.geometry} material={materials.internals_alu} position={[6, 0.036, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.undercarriage_tail01.geometry} material={materials.internals_b} position={[5.898, 0.011, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.undercarriage_tail03.geometry} material={materials.internals_alu} position={[0, 0.114, -0.016]} rotation={[-0.276, 0, 0]}>
            <mesh geometry={nodes.undercarriage_tail04.geometry} material={materials.internals_alu} position={[0, 0.2, -0.002]} rotation={[0.424, 0, 0]}>
              <mesh geometry={nodes.undercarriage_tail05.geometry} material={materials.internals_alu} position={[0, 0.011, -0.01]} rotation={[Math.PI / 2, 0, 0]}>
                <group position={[-0.058, 0.019, 0.004]} rotation={[-1.57, 0, 0]} scale={[1.33, 1, 1]}>
                  <mesh geometry={nodes.undercarriage_tail_wire_R02.geometry} material={materials.internals_alu} position={[0, -0.005, 0]} rotation={[1.344, -1.536, 1.853]} scale={[1.318, 1.016, 0.752]}>
                    <mesh geometry={nodes.undercarriage_tail_wire_R01.geometry} material={materials.internals_alu} position={[0, -0.006, 0]} rotation={[0, -Math.PI / 2, 0]} />
                  </mesh>
                </group>
                <group position={[0.058, 0.019, 0.004]} rotation={[-1.57, 0, 0]} scale={[1.33, 1, 1]}>
                  <mesh geometry={nodes.undercarriage_tail_wire_L02.geometry} material={materials.internals_alu} position={[0, -0.005, 0]} rotation={[-1.79, -1.539, -1.263]} scale={[1.318, 1.016, 0.752]}>
                    <mesh geometry={nodes.undercarriage_wire_L01.geometry} material={materials.internals_alu} position={[0, -0.006, 0]} rotation={[1.439, 1.566, -1.437]} />
                  </mesh>
                </group>
                <group position={[0, -0.093, -0.092]} rotation={[-1.57, Math.PI / 2, 0]}>
                  <mesh geometry={nodes.Mesh097.geometry} material={materials.internals_alu} />
                  <mesh geometry={nodes.Mesh097_1.geometry} material={materials.tires} />
                </group>
              </mesh>
            </mesh>
          </mesh>
        </mesh>
        <mesh geometry={nodes.fuselage16.geometry} material={materials.base} position={[5.574, 0.058, 0.102]} rotation={[0.148, 0.127, -1.521]} />
        <mesh geometry={nodes.rudder01.geometry} material={materials.base} position={[6.017, 0.036, 0]}>
          <mesh geometry={nodes.undercarriage_tail02.geometry} material={materials.internals_alu} position={[0, -0.001, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
            <mesh geometry={nodes.rudder_spring_R.geometry} material={materials.internals_alu} position={[-0.052, 0.006, -0.018]} rotation={[2.773, 0.011, 3.111]} scale={[0.994, 1.012, 0.994]} />
            <mesh geometry={nodes.rudder_spring_L.geometry} material={materials.internals_alu} position={[0.052, 0.006, -0.018]} rotation={[2.773, -0.011, -3.113]} scale={[0.994, 1.012, 0.994]} />
          </mesh>
          <mesh geometry={nodes.rudder02.geometry} material={materials.base} position={[0.081, 0.078, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
            <mesh geometry={nodes.pin06001.geometry} material={materials.base} position={[-0.06, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh geometry={nodes.rudder04.geometry} material={materials.base} position={[0.035, 0, -0.001]} rotation={[0, 0, Math.PI / 2]}>
                <mesh geometry={nodes.rudder_wire_R.geometry} material={materials.base} rotation={[-Math.PI / 2, -1.522, 3.037]}>
                  <mesh geometry={nodes.pin07.geometry} material={materials.base} position={[0.027, 0.002, -0.001]} rotation={[2.903, -1.55, 2.908]} />
                </mesh>
              </mesh>
            </mesh>
            <mesh geometry={nodes.pin06.geometry} material={materials.base} position={[0.06, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh geometry={nodes.rudder03.geometry} material={materials.base} position={[0.035, 0, -0.001]} rotation={[0, 0, Math.PI / 2]}>
                <mesh geometry={nodes.rudder_wire_L.geometry} material={materials.base} rotation={[Math.PI / 2, -1.522, -0.104]}>
                  <mesh geometry={nodes.pin07001.geometry} material={materials.base} position={[0.027, 0.002, 0.001]} rotation={[2.927, -1.546, 2.922]} />
                </mesh>
              </mesh>
            </mesh>
          </mesh>
        </mesh>
        <mesh geometry={nodes.undercarriage02.geometry} material={materials.base} position={[1.183, -0.826, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh geometry={nodes.undercarriage01.geometry} material={materials.base} position={[0, 0, 0.03]}>
            <mesh geometry={nodes.undercarriage_R03.geometry} material={materials.base} position={[-0.037, 0, -0.014]} rotation={[-1.569, 1.214, 3.139]}>
              <mesh geometry={nodes.undercarriage_R04.geometry} material={materials.base} position={[0, -0.004, -0.255]} rotation={[-1.379, 1.57, 1.379]} />
            </mesh>
            <mesh geometry={nodes.undercarriage_L03.geometry} material={materials.base} position={[0.037, 0, -0.014]} rotation={[-1.569, -1.215, 0.002]}>
              <mesh geometry={nodes.undercarriage_L04.geometry} material={materials.base} position={[0, 0.004, -0.256]} rotation={[-0.002, 1.57, 0]} />
            </mesh>
          </mesh>
        </mesh>
        <mesh geometry={nodes.undercarriage_R01.geometry} material={materials.base} position={[1.165, -0.597, -0.323]} rotation={[-0.826, 0, Math.PI / 2]}>
          <mesh geometry={nodes.undercarriage_R02.geometry} material={materials.base} position={[-0.067, -0.003, -0.562]} rotation={[3.141, 0.47, 0]} />
          <group position={[0.097, -0.003, -0.713]} rotation={[Math.PI / 2, 0, 2.397]}>
            <mesh geometry={nodes.Mesh112.geometry} material={materials.base} />
            <mesh geometry={nodes.Mesh112_1.geometry} material={materials.tires} />
            <mesh geometry={nodes.wheel_R02.geometry} material={materials.internals_alu} position={[0.103, 0, 0]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh geometry={nodes.wheel_R03.geometry} material={materials.internals_alu} position={[0, 0, 0.017]} />
            </mesh>
          </group>
        </mesh>
        <mesh geometry={nodes.undercarriage_L01.geometry} material={materials.base} position={[1.165, -0.597, 0.323]} rotation={[-2.316, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.wheel_L02.geometry} material={materials.internals_alu} position={[0.022, 0.003, -0.644]} rotation={[-Math.PI, 0.826, Math.PI]} />
          <mesh geometry={nodes.wheel_L03.geometry} material={materials.internals_alu} position={[0.034, 0.003, -0.655]} rotation={[-Math.PI, 0.826, Math.PI]} />
          <mesh geometry={nodes.undercarriage_L02.geometry} material={materials.base} position={[-0.067, 0.003, -0.562]} rotation={[-3.141, 0.47, 0]} />
          <group position={[0.097, 0.003, -0.713]} rotation={[Math.PI / 2, 0, -0.745]}>
            <mesh geometry={nodes.Mesh121.geometry} material={materials.base} />
            <mesh geometry={nodes.Mesh121_1.geometry} material={materials.tires} />
          </group>
        </mesh>
        <mesh geometry={nodes.fuselage12.geometry} material={materials.base} position={[1.166, -0.598, -0.323]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.undercarriage_R05.geometry} material={materials.base} position={[0.048, 0, -0.006]} rotation={[0, -0.906, -Math.PI]} />
        </mesh>
        <mesh geometry={nodes.fuselage14.geometry} material={materials.base} position={[1.71, -0.6, -0.318]} rotation={[1.582, 1.571, 0]} />
        <mesh geometry={nodes.fuselage15.geometry} material={materials.base} position={[1.71, -0.6, 0.318]} rotation={[1.56, -1.571, 0]} />
        <mesh geometry={nodes.fuselage13.geometry} material={materials.base} position={[1.166, -0.598, 0.323]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.undercarriage_L05.geometry} material={materials.base} position={[-0.048, 0, -0.006]} rotation={[0, 0.906, 0]} />
        </mesh>
        <mesh geometry={nodes.wing_support_R01.geometry} material={materials.base} position={[1.718, -0.574, -0.35]} rotation={[1.946, 0.051, 1.701]}>
          <mesh geometry={nodes.nut01001.geometry} material={materials.base} position={[-0.093, -0.009, 0]} rotation={[-3.141, 1.571, 0]}>
            <mesh geometry={nodes.wing_support_R08.geometry} material={materials.base} position={[0, 0, 0.016]} />
          </mesh>
          <mesh geometry={nodes.nut01.geometry} material={materials.base} position={[-0.088, 0.034, -0.001]} rotation={[1.542, 1.333, 1.505]}>
            <mesh geometry={nodes.wing_support_R09.geometry} material={materials.base} position={[0, 0, 0.016]} />
          </mesh>
          <mesh geometry={nodes.wing_wire_R01.geometry} material={materials.base} position={[-0.037, -0.034, -0.018]} rotation={[0, 0.379, -0.14]} />
          <mesh geometry={nodes.wing_support_R07.geometry} material={materials.base} position={[-3.172, -0.014, 0.004]} rotation={[0, 0.379, -0.14]}>
            <mesh geometry={nodes.pin08001.geometry} material={materials.base} position={[0.018, -0.003, 0.011]} rotation={[-Math.PI / 2, 0, 2.769]} />
          </mesh>
          <mesh geometry={nodes.wing_support_R06.geometry} material={materials.base} position={[-3.077, 0.716, -0.034]} rotation={[0, 0.379, -0.14]}>
            <mesh geometry={nodes.aileron_controll_R01.geometry} material={materials.base} position={[0.018, -0.01, 0.011]} rotation={[-Math.PI / 2, 0, 2.769]}>
              <mesh geometry={nodes.aileron_controll_R02.geometry} material={materials.base} position={[-0.06, 0, -0.076]} rotation={[-Math.PI / 2, 0, Math.PI / 4]}>
                <mesh geometry={nodes.aileron_controll_R04.geometry} material={materials.base} position={[0, 0.028, 0]}>
                  <mesh geometry={nodes.aileron_controll_R05.geometry} material={materials.base} position={[0, 0.001, 0]} />
                </mesh>
                <mesh geometry={nodes.aileron_controll_R03.geometry} material={materials.base} position={[0, -0.039, 0]} />
              </mesh>
            </mesh>
          </mesh>
          <mesh geometry={nodes.wing_support_R05.geometry} material={materials.base}>
            <mesh geometry={nodes.wing_support_R04.geometry} material={materials.base} position={[-1.553, -0.013, -0.057]} rotation={[-0.364, 0.402, 0]}>
              <mesh geometry={nodes.wing_support_R10.geometry} material={materials.base} position={[0, 0.001, -0.543]} rotation={[1.908, -1.556, -1.571]} scale={[-1, 1, 1]} />
            </mesh>
            <mesh geometry={nodes.wing_support_R03.geometry} material={materials.base} position={[-1.505, 0.357, -0.077]} rotation={[0.279, 0.328, -0.237]}>
              <mesh geometry={nodes.wing_support_R11.geometry} material={materials.base} position={[0, 0.001, -0.532]} rotation={[1.304, -1.557, -1.571]} scale={[-1, 1, 1]} />
            </mesh>
            <mesh geometry={nodes.wing_support_R02.geometry} material={materials.base} position={[-1.526, 0.174, -0.052]} rotation={[1.519, -0.13, -0.053]} />
          </mesh>
        </mesh>
        <mesh geometry={nodes.wing_support_L01.geometry} material={materials.base} position={[1.718, -0.574, 0.35]} rotation={[-1.946, -0.051, -1.441]}>
          <mesh geometry={nodes.wing_support_L05.geometry} material={materials.base}>
            <mesh geometry={nodes.wing_support_L02.geometry} material={materials.base} position={[1.526, -0.174, 0.052]} rotation={[1.519, -0.13, -0.053]} />
            <mesh geometry={nodes.wing_support_L03.geometry} material={materials.base} position={[1.505, -0.357, 0.077]} rotation={[0.279, 0.328, -0.237]}>
              <mesh geometry={nodes.wing_support_L11.geometry} material={materials.base} position={[0, -0.001, 0.532]} rotation={[-0.267, Math.PI / 2, 0]} />
            </mesh>
            <mesh geometry={nodes.wing_support_L04.geometry} material={materials.base} position={[1.553, 0.013, 0.057]} rotation={[-0.364, 0.402, 0]}>
              <mesh geometry={nodes.wing_support_L10.geometry} material={materials.base} position={[0, -0.001, 0.543]} rotation={[0.337, Math.PI / 2, 0]} />
            </mesh>
          </mesh>
          <mesh geometry={nodes.wing_support_L06.geometry} material={materials.base} position={[3.077, -0.716, 0.034]} rotation={[0, 0.379, -0.14]}>
            <mesh geometry={nodes.aileron_controll_L01.geometry} material={materials.base} position={[-0.018, 0.01, -0.011]} rotation={[-Math.PI / 2, 0, 2.769]}>
              <mesh geometry={nodes.aileron_controll_L02.geometry} material={materials.base} position={[0.06, 0, 0.076]} rotation={[-Math.PI / 2, 0, Math.PI / 4]}>
                <mesh geometry={nodes.aileron_controll_L03.geometry} material={materials.base} position={[0, 0.039, 0]} />
                <mesh geometry={nodes.aileron_controll_L04.geometry} material={materials.base} position={[0, -0.028, 0]}>
                  <mesh geometry={nodes.aileron_controll_L05.geometry} material={materials.base} position={[0, -0.001, 0]} />
                </mesh>
              </mesh>
            </mesh>
          </mesh>
          <mesh geometry={nodes.wing_support_L07.geometry} material={materials.base} position={[3.172, 0.014, -0.004]} rotation={[0, 0.379, -0.14]}>
            <mesh geometry={nodes.pin08.geometry} material={materials.base} position={[-0.018, 0.003, -0.011]} rotation={[-Math.PI / 2, 0, 2.769]} />
          </mesh>
          <mesh geometry={nodes.nut01002.geometry} material={materials.base} position={[0.088, -0.034, 0.001]} rotation={[1.542, 1.333, 1.505]}>
            <mesh geometry={nodes.wing_support_L09.geometry} material={materials.base} position={[0, 0, -0.016]} />
          </mesh>
          <mesh geometry={nodes.nut01003.geometry} material={materials.base} position={[0.093, 0.009, 0]} rotation={[-3.141, 1.571, 0]}>
            <mesh geometry={nodes.wing_support_L08.geometry} material={materials.base} position={[0, 0, -0.016]} />
          </mesh>
          <mesh geometry={nodes.wing_wire_L01.geometry} material={materials.base} position={[0.037, 0.034, 0.018]} rotation={[0, 0.379, -0.14]} />
        </mesh>
        <mesh geometry={nodes.fuselage_wings02.geometry} material={materials.base} position={[1.712, 0.696, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.windshield01.geometry} material={materials.glass} />
        <mesh geometry={nodes.windshield02.geometry} material={materials.glass} />
        <mesh geometry={nodes.fuselage_wings.geometry} material={materials.base} position={[1.712, 0.696, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.wing_light_R01.geometry} material={materials.base} position={[-5.126, -0.405, -0.001]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.wing_light_R03.geometry} material={materials.mirror} position={[0, 0, 0.047]} />
            <mesh geometry={nodes.wing_light_R02.geometry} material={materials.glass} />
          </mesh>
          <mesh geometry={nodes.wing_light_L01.geometry} material={materials.base} position={[5.126, -0.405, -0.001]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.wing_light_L03.geometry} material={materials.mirror} position={[0, 0, 0.047]} />
            <mesh geometry={nodes.wing_light_L02.geometry} material={materials.glass} />
          </mesh>
          <mesh geometry={nodes.aileron_R04.geometry} material={materials.base} position={[-3.356, 0.402, 0.074]} rotation={[-0.192, 0, 0]} />
          <mesh geometry={nodes.aileron_L04.geometry} material={materials.base} position={[3.356, 0.402, 0.074]} rotation={[-0.192, 0, 0]} />
          <mesh geometry={nodes.aileron_L01.geometry} material={materials.base} position={[3.492, 0.671, -0.041]}>
            <mesh geometry={nodes.aileron_L02.geometry} material={materials.base} position={[-0.136, 0.096, -0.081]}>
              <mesh geometry={nodes.wing_wire_L02.geometry} material={materials.base} position={[0, -0.023, -0.045]} rotation={[-Math.PI / 2, -1.516, -1.415]} />
            </mesh>
            <mesh geometry={nodes.aileron_L03.geometry} material={materials.base} position={[-0.136, 0.101, 0.031]} rotation={[-0.224, 0, 0]}>
              <mesh geometry={nodes.wing_wire_L03.geometry} material={materials.base} rotation={[-0.007, -1.571, 0]} />
            </mesh>
          </mesh>
          <mesh geometry={nodes.aileron_R01.geometry} material={materials.base} position={[-3.492, 0.671, -0.041]} rotation={[0, 0, Math.PI]}>
            <mesh geometry={nodes.aileron_R02.geometry} material={materials.base} position={[-0.136, -0.096, -0.081]} rotation={[0, 0, Math.PI]}>
              <mesh geometry={nodes.wing_wire_R02.geometry} material={materials.base} position={[0, -0.023, -0.045]} rotation={[1.571, -1.516, 1.726]} />
            </mesh>
            <mesh geometry={nodes.aileron_R03.geometry} material={materials.base} position={[-0.136, -0.101, 0.031]} rotation={[-2.917, 0, -Math.PI]}>
              <mesh geometry={nodes.wing_wire_R03.geometry} material={materials.base} rotation={[3.135, -1.571, 0]} />
            </mesh>
          </mesh>
          <mesh geometry={nodes.flap_R01.geometry} material={materials.base} position={[-1.634, 0.756, -0.124]}>
            <mesh geometry={nodes.flap_R03.geometry} material={materials.base} position={[-0.01, 0, 0.013]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.pin01003.geometry} material={materials.base} position={[0.013, 0, 0.01]} />
            </mesh>
            <mesh geometry={nodes.flap_R02.geometry} material={materials.base} position={[0.799, 0, 0.003]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.pin01002.geometry} material={materials.base} position={[0.013, 0, 0.01]} />
            </mesh>
          </mesh>
          <mesh geometry={nodes.flap_L01.geometry} material={materials.base} position={[1.634, 0.756, -0.124]}>
            <mesh geometry={nodes.flap_L02.geometry} material={materials.base} position={[-0.799, 0, 0.003]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.pin01001.geometry} material={materials.base} position={[0.013, 0, -0.01]} />
            </mesh>
            <mesh geometry={nodes.flap_L03.geometry} material={materials.base} position={[0.01, 0, 0.013]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.pin01.geometry} material={materials.base} position={[0.013, 0, -0.01]} />
            </mesh>
          </mesh>
        </mesh>
      </mesh>
    </group>
  )
}

useGLTF.preload('/piper_pa18.gltf')
