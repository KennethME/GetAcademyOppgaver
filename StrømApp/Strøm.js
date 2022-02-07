updateView()
    function updateView()
    {
        document.getElementById('app').innerHTML = `
        <div class="textBox">
            <tr>
                <th>Dato: ${dato}</th><br>
                <th>Tid: ${time}</th><br>
                <th>Nok per kWh: ${model.timeLog.NOK_per_kWh}</th><br>
                <th>kWh i Time: ${kwhiTimen}kWh</th><br>
                <th>Pris: ${model.timeLog.NOK_per_kWh * kwhiTimen}kr</th><br>
            </tr>
        </div>

        <div class="termoBox">
            <div>
            Varmegrader: 20c
            </div>
            <div class="column">
            <button type="">Opp</button>
            <button type="">Ned</button>
            </div>

        
        
        
        `;
        
    }