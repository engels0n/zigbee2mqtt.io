"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[31439],{14882:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-cc8494e8","path":"/devices/WDE002497.html","title":"Schneider Electric WDE002497 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric WDE002497 control via MQTT","description":"Integrate your Schneider Electric WDE002497 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-02-29T20:19:30.000Z"},"excerpt":"","headers":[{"level":2,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":2,"title":"Resetting device","slug":"resetting-device","link":"#resetting-device","children":[{"level":3,"title":"Soft reset","slug":"soft-reset","link":"#soft-reset","children":[]},{"level":3,"title":"Factory reset","slug":"factory-reset","link":"#factory-reset","children":[]}]},{"level":2,"title":"Program mode preset","slug":"program-mode-preset","link":"#program-mode-preset","children":[]},{"level":2,"title":"Available sensor types","slug":"available-sensor-types","link":"#available-sensor-types","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Keypad lockout (binary)","slug":"keypad-lockout-binary","link":"#keypad-lockout-binary","children":[]},{"level":3,"title":"Schneider pilot mode (enum)","slug":"schneider-pilot-mode-enum","link":"#schneider-pilot-mode-enum","children":[]},{"level":3,"title":"Temperature display mode (enum)","slug":"temperature-display-mode-enum","link":"#temperature-display-mode-enum","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1719674211000},"filePathRelative":"devices/WDE002497.md"}')},891140:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var i=o(166252);const a=(0,i._)("h1",{id:"schneider-electric-wde002497",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#schneider-electric-wde002497","aria-hidden":"true"},"#"),(0,i.Uk)(" Schneider Electric WDE002497")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"WDE002497")],-1),l=(0,i._)("td",null,"Vendor",-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Smart thermostat")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"keypad_lockout, schneider_pilot_mode, temperature_display_mode, climate (occupied_heating_setpoint, local_temperature, system_mode, running_state, pi_heating_demand), temperature, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WDE002497.png",alt:"Schneider Electric WDE002497"})])],-1),u=(0,i.uE)('<h2 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h2><p>Long press the O button until Jn is displayed and then release the button to initiate joining.</p><p>NOTE: If you have already paired your thermostat, and want to change the preset mode during the current pairing process, you will need to perform a factory reset. Otherwise, the thermostat will be paired with the previous preset mode.</p><h2 id="resetting-device" tabindex="-1"><a class="header-anchor" href="#resetting-device" aria-hidden="true">#</a> Resetting device</h2><h3 id="soft-reset" tabindex="-1"><a class="header-anchor" href="#soft-reset" aria-hidden="true">#</a> Soft reset</h3><p>Press and hold the O touch button &gt; 20 s. The thermostat flashes “Sr”, indicating soft reset, and it is selected when the button is released. The ‘Sr’ will flash to confirm the soft rest.</p><p>A soft reset will:</p><ul><li>Delete all cloud and account details maintained by the device to allow re-registration.</li><li>Revert to the default setpoint in manual control.</li><li>Maintain all Factory settings e.g. MAC address.</li><li>Maintain the installer configuration of the device to ensure proper functioning until and after rejoining/re-registration.</li></ul><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset" aria-hidden="true">#</a> Factory reset</h3><p>In reset selection, press and hold the O touch button until thermostat flashes “Fr”, indicating factory reset, and it is selected when the button is released. The ‘Fr’ will flash on the matrix display to confirm the factory reset and the thermostat resets to factory defaults and after 5 s it returns to preset.</p><p>A factory reset will:</p><ul><li>Delete all configuration data.</li><li>Delete all schedules information.</li><li>Revert to the default setpoint in manual control.</li><li>Maintain all Factory settings e.g. MAC address.</li></ul><h2 id="program-mode-preset" tabindex="-1"><a class="header-anchor" href="#program-mode-preset" aria-hidden="true">#</a> Program mode preset</h2><p>Modes P1-P6 are room control modes 4...30 C Modes P7-P8 are floor control modes 10...40 C</p><p>P1 - Heat Pump/Oil Boiler P2 - Hydronic Radiator/Gas Boiler P3 - Hydronic Underfloor P4 - Electrical Radiator P5 - Electrical Underfloor (Without floor limits) P6 - Electrical Underfloor (With floor limits) P7 - Hydronic Underfloor P8 - Electrical Underfloor P9 - Regulator Mode (output displayed is based on percentage)</p><h2 id="available-sensor-types" tabindex="-1"><a class="header-anchor" href="#available-sensor-types" aria-hidden="true">#</a> Available sensor types</h2><ul><li>10 kOhm</li><li>12 kOhm</li><li>15 kOhm</li><li>33 kOhm</li><li>47 kOhm</li></ul>',17),h=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="keypad-lockout-binary" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-binary" aria-hidden="true">#</a> Keypad lockout (binary)</h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. If value equals <code>lock1</code> keypad lockout is ON, if <code>unlock</code> OFF.</p><h3 id="schneider-pilot-mode-enum" tabindex="-1"><a class="header-anchor" href="#schneider-pilot-mode-enum" aria-hidden="true">#</a> Schneider pilot mode (enum)</h3><p>Controls piloting mode. Value can be found in the published state on the <code>schneider_pilot_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schneider_pilot_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schneider_pilot_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>contactor</code>, <code>pilot</code>.</p><h3 id="temperature-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#temperature-display-mode-enum" aria-hidden="true">#</a> Temperature display mode (enum)</h3><p>The temperature format displayed on the thermostat screen. Value can be found in the published state on the <code>temperature_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>4</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li></ul><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),m={},g=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[d,(0,i._)("tbody",null,[r,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,i.w5)((()=>[(0,i.Uk)("Schneider Electric")])),_:1})])]),n,s,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,i.kq)(" Notes END: Do not edit below this line "),h,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);