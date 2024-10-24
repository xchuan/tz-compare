import './style.css'
import { compareLocal,tzCompare,tzCompareTime } from '../lib'

/*
<p>${tzCompare('Moscow')}</p>
<p>${tzCompare('Bangalore')}</p>
<p>${tzCompare('Shanghai')}</p>
<p>${tzCompare('New York')}</p>
<p>${tzCompare("St. John's")}</p>
<p>${tzCompare("St. John's Canada")}</p>
<p>${tzCompare("Kabul")}</p>
<p>${tzCompare("St. John's Canada")}</p>
<p>${tzCompare("Tehran")}</p>
<p>${tzCompare("Rangoon")}</p>
*/

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more ${compareLocal("October 13, 2024 / 7:33 PM EDT")}
    </p>
    <h2>当地时间与指定城市对比</h2>
    
    <p>${tzCompare("Alaska","zh-CN")}</p>
    
    <p>${tzCompare("Shenzhen","zh-CN")}</p>
    <p>${tzCompare("Guangzhou")}</p>
    <p>${tzCompare("Funafuti","zh-CN")}</p>

    <p>${tzCompare("Atka","zh-CN")}</p>

    <p>${tzCompare("Melbourne")}</p>

    <p>${tzCompare("San Marino")}</p>
    <p>${tzCompare("Rainy River","zh-CN")}</p>

    <h2>输入时间与指定城市对比</h2>
    <p>${tzCompareTime('October 13, 2024 / 7:33 PM EDT','Istanbul')}</p>
    <p>${tzCompareTime('October 13, 2024 / 7:33 PM EDT','Shanghai')}</p>
    <p>${tzCompareTime('October 13, 2024 / 7:33 PM EDT','Adelaide','zh-CN')}</p>

    <p>${tzCompareTime('October 13, 2024 / 7:33 PM EDT','Chihuahua')}</p>

    <p>${tzCompareTime('October 13, 2024 / 7:33 PM EDT','New York')}</p>
  </div>
`

