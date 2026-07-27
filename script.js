// Category Functions
function showCategory(category) {
    const container = document.getElementById('calculators-container');
    const content = document.getElementById('calculator-content');
    
    let html = '';
    
    switch(category) {
        case 'percentage':
            html = getPercentageCalculators();
            break;
        case 'financial':
            html = getFinancialCalculators();
            break;
        case 'conversion':
            html = getConversionCalculators();
            break;
        case 'health':
            html = getHealthCalculators();
            break;
        case 'math':
            html = getMathCalculators();
            break;
        case 'education':
            html = getEducationCalculators();
            break;
    }
    
    content.innerHTML = html;
    container.classList.remove('hidden');
    container.scrollIntoView({ behavior: 'smooth' });
}

function backToCategories() {
    document.getElementById('calculators-container').classList.add('hidden');
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}

// PERCENTAGE CALCULATORS
function getPercentageCalculators() {
    return `
        <h2 class="text-3xl font-bold mb-8">📊 Percentage Calculators</h2>
        
        <!-- What is X% of Y -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">What is X% of Y?</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Percentage (%)</label>
                    <input type="number" id="pct-x-percent" placeholder="Enter percentage" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Total Amount</label>
                    <input type="number" id="pct-x-total" placeholder="Enter total amount" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateWhatIsPercentOf()">Calculate</button>
            <div id="pct-x-result" class="result-box hidden">
                <div class="result-label">Result:</div>
                <div class="result-value" id="pct-x-value">0</div>
            </div>
        </div>

        <!-- X is what % of Y -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">X is what % of Y?</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Number (X)</label>
                    <input type="number" id="pct-is-number" placeholder="Enter number" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Total (Y)</label>
                    <input type="number" id="pct-is-total" placeholder="Enter total" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateXIsWhatPercent()">Calculate</button>
            <div id="pct-is-result" class="result-box hidden">
                <div class="result-label">Percentage:</div>
                <div class="result-value" id="pct-is-value">0%</div>
            </div>
        </div>

        <!-- Discount Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Discount Calculator</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Original Price</label>
                    <input type="number" id="disc-price" placeholder="Enter price" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Discount %</label>
                    <input type="number" id="disc-percent" placeholder="Enter discount %" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateDiscount()">Calculate</button>
            <div id="disc-result" class="result-box hidden">
                <div class="result-label">You Save:</div>
                <div class="result-value" id="disc-amount">$0.00</div>
                <div class="result-label mt-4">Final Price:</div>
                <div class="result-value" id="disc-final">$0.00</div>
            </div>
        </div>

        <!-- Profit/Loss Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Profit/Loss Calculator</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Cost Price</label>
                    <input type="number" id="profit-cost" placeholder="Enter cost price" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Selling Price</label>
                    <input type="number" id="profit-selling" placeholder="Enter selling price" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateProfitLoss()">Calculate</button>
            <div id="profit-result" class="result-box hidden">
                <div class="result-label">Amount:</div>
                <div class="result-value" id="profit-amount">$0.00</div>
                <div class="result-label mt-4">Percentage:</div>
                <div class="result-value" id="profit-percent">0%</div>
            </div>
        </div>
    `;
}

// FINANCIAL CALCULATORS
function getFinancialCalculators() {
    return `
        <h2 class="text-3xl font-bold mb-8">💰 Financial Calculators</h2>
        
        <!-- EMI Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">EMI Calculator</h3>
            <div class="input-group">
                <label class="input-label">Loan Amount</label>
                <input type="number" id="emi-principal" placeholder="Enter loan amount" step="0.01">
            </div>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Annual Interest Rate (%)</label>
                    <input type="number" id="emi-rate" placeholder="Enter rate" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Loan Tenure (Months)</label>
                    <input type="number" id="emi-months" placeholder="Enter months" step="1">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateEMI()">Calculate EMI</button>
            <div id="emi-result" class="result-box hidden">
                <div class="result-label">Monthly Payment:</div>
                <div class="result-value" id="emi-value">$0.00</div>
                <div class="result-label mt-4">Total Amount Payable:</div>
                <div class="result-value" id="emi-total">$0.00</div>
                <div class="result-label mt-4">Total Interest:</div>
                <div class="result-value" id="emi-interest">$0.00</div>
            </div>
        </div>

        <!-- Simple Interest Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Simple Interest Calculator</h3>
            <div class="input-group">
                <label class="input-label">Principal Amount</label>
                <input type="number" id="si-principal" placeholder="Enter principal" step="0.01">
            </div>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Rate of Interest (% per year)</label>
                    <input type="number" id="si-rate" placeholder="Enter rate" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Time Period (Years)</label>
                    <input type="number" id="si-time" placeholder="Enter years" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateSimpleInterest()">Calculate</button>
            <div id="si-result" class="result-box hidden">
                <div class="result-label">Simple Interest:</div>
                <div class="result-value" id="si-value">$0.00</div>
                <div class="result-label mt-4">Total Amount:</div>
                <div class="result-value" id="si-total">$0.00</div>
            </div>
        </div>

        <!-- Compound Interest Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Compound Interest Calculator</h3>
            <div class="input-group">
                <label class="input-label">Principal Amount</label>
                <input type="number" id="ci-principal" placeholder="Enter principal" step="0.01">
            </div>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Annual Interest Rate (%)</label>
                    <input type="number" id="ci-rate" placeholder="Enter rate" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Time Period (Years)</label>
                    <input type="number" id="ci-time" placeholder="Enter years" step="0.01">
                </div>
            </div>
            <div class="input-group">
                <label class="input-label">Compounded</label>
                <select id="ci-compound">
                    <option value="1">Annually</option>
                    <option value="2">Semi-Annually</option>
                    <option value="4">Quarterly</option>
                    <option value="12">Monthly</option>
                </select>
            </div>
            <button class="btn-primary" onclick="calculateCompoundInterest()">Calculate</button>
            <div id="ci-result" class="result-box hidden">
                <div class="result-label">Compound Interest:</div>
                <div class="result-value" id="ci-value">$0.00</div>
                <div class="result-label mt-4">Total Amount:</div>
                <div class="result-value" id="ci-total">$0.00</div>
            </div>
        </div>

        <!-- SIP Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">SIP Calculator</h3>
            <div class="input-group">
                <label class="input-label">Monthly Investment</label>
                <input type="number" id="sip-amount" placeholder="Enter monthly amount" step="0.01">
            </div>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Expected Annual Return (%)</label>
                    <input type="number" id="sip-return" placeholder="Enter return %" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Investment Period (Years)</label>
                    <input type="number" id="sip-years" placeholder="Enter years" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateSIP()">Calculate</button>
            <div id="sip-result" class="result-box hidden">
                <div class="result-label">Total Amount Invested:</div>
                <div class="result-value" id="sip-invested">$0.00</div>
                <div class="result-label mt-4">Wealth Gained:</div>
                <div class="result-value" id="sip-gain">$0.00</div>
                <div class="result-label mt-4">Total Value:</div>
                <div class="result-value" id="sip-total">$0.00</div>
            </div>
        </div>
    `;
}

// CONVERSION CALCULATORS
function getConversionCalculators() {
    return `
        <h2 class="text-3xl font-bold mb-8">🔄 Conversion Calculators</h2>
        
        <!-- Length Conversion -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Length Converter</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">From</label>
                    <select id="len-from">
                        <option value="m">Meter (m)</option>
                        <option value="km">Kilometer (km)</option>
                        <option value="cm">Centimeter (cm)</option>
                        <option value="mm">Millimeter (mm)</option>
                        <option value="mi">Mile (mi)</option>
                        <option value="yd">Yard (yd)</option>
                        <option value="ft">Foot (ft)</option>
                        <option value="in">Inch (in)</option>
                    </select>
                </div>
                <div class="input-group">
                    <label class="input-label">To</label>
                    <select id="len-to">
                        <option value="m">Meter (m)</option>
                        <option value="km">Kilometer (km)</option>
                        <option value="cm">Centimeter (cm)</option>
                        <option value="mm">Millimeter (mm)</option>
                        <option value="mi">Mile (mi)</option>
                        <option value="yd">Yard (yd)</option>
                        <option value="ft">Foot (ft)</option>
                        <option value="in">Inch (in)</option>
                    </select>
                </div>
            </div>
            <div class="input-group">
                <label class="input-label">Value</label>
                <input type="number" id="len-value" placeholder="Enter value" step="0.01">
            </div>
            <button class="btn-primary" onclick="convertLength()">Convert</button>
            <div id="len-result" class="result-box hidden">
                <div class="result-label">Result:</div>
                <div class="result-value" id="len-converted">0</div>
            </div>
        </div>

        <!-- Weight Conversion -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Weight Converter</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">From</label>
                    <select id="wt-from">
                        <option value="kg">Kilogram (kg)</option>
                        <option value="g">Gram (g)</option>
                        <option value="mg">Milligram (mg)</option>
                        <option value="lb">Pound (lb)</option>
                        <option value="oz">Ounce (oz)</option>
                        <option value="ton">Metric Ton (ton)</option>
                    </select>
                </div>
                <div class="input-group">
                    <label class="input-label">To</label>
                    <select id="wt-to">
                        <option value="kg">Kilogram (kg)</option>
                        <option value="g">Gram (g)</option>
                        <option value="mg">Milligram (mg)</option>
                        <option value="lb">Pound (lb)</option>
                        <option value="oz">Ounce (oz)</option>
                        <option value="ton">Metric Ton (ton)</option>
                    </select>
                </div>
            </div>
            <div class="input-group">
                <label class="input-label">Value</label>
                <input type="number" id="wt-value" placeholder="Enter value" step="0.01">
            </div>
            <button class="btn-primary" onclick="convertWeight()">Convert</button>
            <div id="wt-result" class="result-box hidden">
                <div class="result-label">Result:</div>
                <div class="result-value" id="wt-converted">0</div>
            </div>
        </div>

        <!-- Temperature Conversion -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Temperature Converter</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">From</label>
                    <select id="temp-from">
                        <option value="c">Celsius (°C)</option>
                        <option value="f">Fahrenheit (°F)</option>
                        <option value="k">Kelvin (K)</option>
                    </select>
                </div>
                <div class="input-group">
                    <label class="input-label">To</label>
                    <select id="temp-to">
                        <option value="c">Celsius (°C)</option>
                        <option value="f">Fahrenheit (°F)</option>
                        <option value="k">Kelvin (K)</option>
                    </select>
                </div>
            </div>
            <div class="input-group">
                <label class="input-label">Value</label>
                <input type="number" id="temp-value" placeholder="Enter value" step="0.01">
            </div>
            <button class="btn-primary" onclick="convertTemperature()">Convert</button>
            <div id="temp-result" class="result-box hidden">
                <div class="result-label">Result:</div>
                <div class="result-value" id="temp-converted">0</div>
            </div>
        </div>
    `;
}

// HEALTH & FITNESS CALCULATORS
function getHealthCalculators() {
    return `
        <h2 class="text-3xl font-bold mb-8">❤️ Health & Fitness Calculators</h2>
        
        <!-- BMI Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">BMI Calculator</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Height (cm)</label>
                    <input type="number" id="bmi-height" placeholder="Enter height" step="0.1">
                </div>
                <div class="input-group">
                    <label class="input-label">Weight (kg)</label>
                    <input type="number" id="bmi-weight" placeholder="Enter weight" step="0.1">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateBMI()">Calculate BMI</button>
            <div id="bmi-result" class="result-box hidden">
                <div class="result-label">BMI:</div>
                <div class="result-value" id="bmi-value">0</div>
                <div class="result-label mt-4">Category:</div>
                <div class="result-value" id="bmi-category">Normal</div>
            </div>
        </div>

        <!-- Calorie Burn Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Calorie Burn Calculator</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Weight (kg)</label>
                    <input type="number" id="cal-weight" placeholder="Enter weight" step="0.1">
                </div>
                <div class="input-group">
                    <label class="input-label">Duration (minutes)</label>
                    <input type="number" id="cal-duration" placeholder="Enter duration" step="1">
                </div>
            </div>
            <div class="input-group">
                <label class="input-label">Activity Type</label>
                <select id="cal-type">
                    <option value="3">Walking (Slow)</option>
                    <option value="5">Walking (Moderate)</option>
                    <option value="8">Running (6 mph)</option>
                    <option value="10">Running (8 mph)</option>
                    <option value="5">Cycling (Moderate)</option>
                    <option value="9">Cycling (Vigorous)</option>
                    <option value="7">Swimming</option>
                    <option value="7">Basketball</option>
                </select>
            </div>
            <button class="btn-primary" onclick="calculateCaloriBurn()">Calculate</button>
            <div id="cal-result" class="result-box hidden">
                <div class="result-label">Calories Burned:</div>
                <div class="result-value" id="cal-value">0 kcal</div>
            </div>
        </div>

        <!-- Age Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Age Calculator</h3>
            <div class="input-group">
                <label class="input-label">Date of Birth</label>
                <input type="date" id="dob-date">
            </div>
            <button class="btn-primary" onclick="calculateAge()">Calculate Age</button>
            <div id="age-result" class="result-box hidden">
                <div class="result-label">Age:</div>
                <div class="result-value" id="age-value">0 years</div>
                <div class="result-label mt-4">Exact:</div>
                <div class="result-value" id="age-exact" style="font-size: 1.2rem;">0y 0m 0d</div>
            </div>
        </div>

        <!-- Ideal Weight Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Ideal Weight Calculator</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Gender</label>
                    <select id="ideal-gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div class="input-group">
                    <label class="input-label">Height (cm)</label>
                    <input type="number" id="ideal-height" placeholder="Enter height" step="0.1">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateIdealWeight()">Calculate</button>
            <div id="ideal-result" class="result-box hidden">
                <div class="result-label">Ideal Weight Range:</div>
                <div class="result-value" id="ideal-value">0 - 0 kg</div>
            </div>
        </div>
    `;
}

// MATH CALCULATORS
function getMathCalculators() {
    return `
        <h2 class="text-3xl font-bold mb-8">🔢 Math Calculators</h2>
        
        <!-- GCD & LCM Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">GCD & LCM Calculator</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">First Number</label>
                    <input type="number" id="gcd-first" placeholder="Enter number" step="1">
                </div>
                <div class="input-group">
                    <label class="input-label">Second Number</label>
                    <input type="number" id="gcd-second" placeholder="Enter number" step="1">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateGCDLCM()">Calculate</button>
            <div id="gcd-result" class="result-box hidden">
                <div class="result-label">GCD:</div>
                <div class="result-value" id="gcd-value">0</div>
                <div class="result-label mt-4">LCM:</div>
                <div class="result-value" id="lcm-value">0</div>
            </div>
        </div>

        <!-- Area Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Area Calculator</h3>
            <div class="input-group">
                <label class="input-label">Shape</label>
                <select id="area-shape" onchange="updateAreaInputs()">
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                    <option value="rectangle">Rectangle</option>
                    <option value="triangle">Triangle</option>
                </select>
            </div>
            <div id="area-inputs"></div>
            <button class="btn-primary" onclick="calculateArea()">Calculate Area</button>
            <div id="area-result" class="result-box hidden">
                <div class="result-label">Area:</div>
                <div class="result-value" id="area-value">0 sq units</div>
            </div>
        </div>

        <!-- Volume Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Volume Calculator</h3>
            <div class="input-group">
                <label class="input-label">Shape</label>
                <select id="vol-shape" onchange="updateVolumeInputs()">
                    <option value="sphere">Sphere</option>
                    <option value="cube">Cube</option>
                    <option value="cylinder">Cylinder</option>
                    <option value="cone">Cone</option>
                </select>
            </div>
            <div id="vol-inputs"></div>
            <button class="btn-primary" onclick="calculateVolume()">Calculate Volume</button>
            <div id="vol-result" class="result-box hidden">
                <div class="result-label">Volume:</div>
                <div class="result-value" id="vol-value">0 cubic units</div>
            </div>
        </div>

        <!-- Square Root & Power Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Square Root & Power</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Number</label>
                    <input type="number" id="pow-base" placeholder="Enter number" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Power</label>
                    <input type="number" id="pow-exp" placeholder="Enter power" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculatePower()">Calculate</button>
            <div id="pow-result" class="result-box hidden">
                <div class="result-label">Result:</div>
                <div class="result-value" id="pow-value">0</div>
            </div>
        </div>
    `;
}

// EDUCATION CALCULATORS
function getEducationCalculators() {
    return `
        <h2 class="text-3xl font-bold mb-8">🎓 Education Calculators</h2>
        
        <!-- Percentage Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Marks Percentage Calculator</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Obtained Marks</label>
                    <input type="number" id="stud-obtained" placeholder="Enter marks" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Total Marks</label>
                    <input type="number" id="stud-total" placeholder="Enter total" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateStudentPercentage()">Calculate</button>
            <div id="stud-result" class="result-box hidden">
                <div class="result-label">Percentage:</div>
                <div class="result-value" id="stud-percent">0%</div>
                <div class="result-label mt-4">Grade:</div>
                <div class="result-value" id="stud-grade">F</div>
            </div>
        </div>

        <!-- GPA Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">GPA Calculator (4.0 Scale)</h3>
            <div id="gpa-inputs"></div>
            <button class="btn-secondary" onclick="addGPARow()" style="margin-top: 1rem; margin-bottom: 1rem;">+ Add Subject</button>
            <button class="btn-primary" onclick="calculateGPA()">Calculate GPA</button>
            <div id="gpa-result" class="result-box hidden">
                <div class="result-label">GPA:</div>
                <div class="result-value" id="gpa-value">0.00</div>
            </div>
        </div>

        <!-- CGPA Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">CGPA Calculator</h3>
            <div id="cgpa-inputs"></div>
            <button class="btn-secondary" onclick="addCGPARow()" style="margin-top: 1rem; margin-bottom: 1rem;">+ Add Semester</button>
            <button class="btn-primary" onclick="calculateCGPA()">Calculate CGPA</button>
            <div id="cgpa-result" class="result-box hidden">
                <div class="result-label">CGPA:</div>
                <div class="result-value" id="cgpa-value">0.00</div>
            </div>
        </div>

        <!-- Result Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Result Calculator</h3>
            <div class="input-group">
                <label class="input-label">Select How to Calculate</label>
                <select id="result-type" onchange="updateResultType()">
                    <option value="need">How many marks do I need?</option>
                    <option value="average">What's my average?</option>
                </select>
            </div>
            <div id="result-inputs"></div>
            <button class="btn-primary" onclick="calculateResult()">Calculate</button>
            <div id="result-result" class="result-box hidden">
                <div class="result-label">Result:</div>
                <div class="result-value" id="result-value">0</div>
            </div>
        </div>
    `;
}

// CALCULATION FUNCTIONS

// Percentage Functions
function calculateWhatIsPercentOf() {
    const percent = parseFloat(document.getElementById('pct-x-percent').value);
    const total = parseFloat(document.getElementById('pct-x-total').value);
    
    if (isNaN(percent) || isNaN(total) || total === 0) {
        alert('Please enter valid numbers');
        return;
    }
    
    const result = (percent / 100) * total;
    document.getElementById('pct-x-value').textContent = result.toFixed(2);
    document.getElementById('pct-x-result').classList.remove('hidden');
}

function calculateXIsWhatPercent() {
    const number = parseFloat(document.getElementById('pct-is-number').value);
    const total = parseFloat(document.getElementById('pct-is-total').value);
    
    if (isNaN(number) || isNaN(total) || total === 0) {
        alert('Please enter valid numbers');
        return;
    }
    
    const percentage = (number / total) * 100;
    document.getElementById('pct-is-value').textContent = percentage.toFixed(2) + '%';
    document.getElementById('pct-is-result').classList.remove('hidden');
}

function calculateDiscount() {
    const price = parseFloat(document.getElementById('disc-price').value);
    const discount = parseFloat(document.getElementById('disc-percent').value);
    
    if (isNaN(price) || isNaN(discount)) {
        alert('Please enter valid numbers');
        return;
    }
    
    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    
    document.getElementById('disc-amount').textContent = '$' + discountAmount.toFixed(2);
    document.getElementById('disc-final').textContent = '$' + finalPrice.toFixed(2);
    document.getElementById('disc-result').classList.remove('hidden');
}

function calculateProfitLoss() {
    const cost = parseFloat(document.getElementById('profit-cost').value);
    const selling = parseFloat(document.getElementById('profit-selling').value);
    
    if (isNaN(cost) || isNaN(selling)) {
        alert('Please enter valid numbers');
        return;
    }
    
    const amount = selling - cost;
    const percent = (amount / cost) * 100;
    
    document.getElementById('profit-amount').textContent = '$' + amount.toFixed(2);
    document.getElementById('profit-percent').textContent = percent.toFixed(2) + '%';
    document.getElementById('profit-result').classList.remove('hidden');
}

// Financial Functions
function calculateEMI() {
    const principal = parseFloat(document.getElementById('emi-principal').value);
    const rate = parseFloat(document.getElementById('emi-rate').value);
    const months = parseFloat(document.getElementById('emi-months').value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(months)) {
        alert('Please enter valid numbers');
        return;
    }
    
    const monthlyRate = rate / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;
    
    document.getElementById('emi-value').textContent = '$' + emi.toFixed(2);
    document.getElementById('emi-total').textContent = '$' + totalAmount.toFixed(2);
    document.getElementById('emi-interest').textContent = '$' + totalInterest.toFixed(2);
    document.getElementById('emi-result').classList.remove('hidden');
}

function calculateSimpleInterest() {
    const principal = parseFloat(document.getElementById('si-principal').value);
    const rate = parseFloat(document.getElementById('si-rate').value);
    const time = parseFloat(document.getElementById('si-time').value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers');
        return;
    }
    
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    
    document.getElementById('si-value').textContent = '$' + interest.toFixed(2);
    document.getElementById('si-total').textContent = '$' + total.toFixed(2);
    document.getElementById('si-result').classList.remove('hidden');
}

function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('ci-principal').value);
    const rate = parseFloat(document.getElementById('ci-rate').value);
    const time = parseFloat(document.getElementById('ci-time').value);
    const compound = parseInt(document.getElementById('ci-compound').value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers');
        return;
    }
    
    const amount = principal * Math.pow(1 + rate / (100 * compound), compound * time);
    const interest = amount - principal;
    
    document.getElementById('ci-value').textContent = '$' + interest.toFixed(2);
    document.getElementById('ci-total').textContent = '$' + amount.toFixed(2);
    document.getElementById('ci-result').classList.remove('hidden');
}

function calculateSIP() {
    const amount = parseFloat(document.getElementById('sip-amount').value);
    const returnRate = parseFloat(document.getElementById('sip-return').value);
    const years = parseFloat(document.getElementById('sip-years').value);
    
    if (isNaN(amount) || isNaN(returnRate) || isNaN(years)) {
        alert('Please enter valid numbers');
        return;
    }
    
    const months = years * 12;
    const monthlyReturn = returnRate / 12 / 100;
    
    const futureValue = amount * (((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn) * (1 + monthlyReturn));
    const totalInvested = amount * months;
    const gain = futureValue - totalInvested;
    
    document.getElementById('sip-invested').textContent = '$' + totalInvested.toFixed(2);
    document.getElementById('sip-gain').textContent = '$' + gain.toFixed(2);
    document.getElementById('sip-total').textContent = '$' + futureValue.toFixed(2);
    document.getElementById('sip-result').classList.remove('hidden');
}

// Conversion Functions
function convertLength() {
    const from = document.getElementById('len-from').value;
    const to = document.getElementById('len-to').value;
    const value = parseFloat(document.getElementById('len-value').value);
    
    if (isNaN(value)) {
        alert('Please enter a valid value');
        return;
    }
    
    const toMeters = {
        'm': 1,
        'km': 1000,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    };
    
    const meters = value * toMeters[from];
    const result = meters / toMeters[to];
    
    document.getElementById('len-converted').textContent = result.toFixed(6);
    document.getElementById('len-result').classList.remove('hidden');
}

function convertWeight() {
    const from = document.getElementById('wt-from').value;
    const to = document.getElementById('wt-to').value;
    const value = parseFloat(document.getElementById('wt-value').value);
    
    if (isNaN(value)) {
        alert('Please enter a valid value');
        return;
    }
    
    const toKg = {
        'kg': 1,
        'g': 0.001,
        'mg': 0.000001,
        'lb': 0.453592,
        'oz': 0.0283495,
        'ton': 1000
    };
    
    const kg = value * toKg[from];
    const result = kg / toKg[to];
    
    document.getElementById('wt-converted').textContent = result.toFixed(6);
    document.getElementById('wt-result').classList.remove('hidden');
}

function convertTemperature() {
    const from = document.getElementById('temp-from').value;
    const to = document.getElementById('temp-to').value;
    const value = parseFloat(document.getElementById('temp-value').value);
    
    if (isNaN(value)) {
        alert('Please enter a valid value');
        return;
    }
    
    let celsius;
    
    if (from === 'c') {
        celsius = value;
    } else if (from === 'f') {
        celsius = (value - 32) * 5 / 9;
    } else if (from === 'k') {
        celsius = value - 273.15;
    }
    
    let result;
    if (to === 'c') {
        result = celsius;
    } else if (to === 'f') {
        result = (celsius * 9 / 5) + 32;
    } else if (to === 'k') {
        result = celsius + 273.15;
    }
    
    document.getElementById('temp-converted').textContent = result.toFixed(2);
    document.getElementById('temp-result').classList.remove('hidden');
}

// Health Functions
function calculateBMI() {
    const height = parseFloat(document.getElementById('bmi-height').value);
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    
    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid values');
        return;
    }
    
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    let category;
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';
    
    document.getElementById('bmi-value').textContent = bmi.toFixed(1);
    document.getElementById('bmi-category').textContent = category;
    document.getElementById('bmi-result').classList.remove('hidden');
}

function calculateCaloriBurn() {
    const weight = parseFloat(document.getElementById('cal-weight').value);
    const duration = parseFloat(document.getElementById('cal-duration').value);
    const met = parseFloat(document.getElementById('cal-type').value);
    
    if (isNaN(weight) || isNaN(duration)) {
        alert('Please enter valid values');
        return;
    }
    
    const calories = met * weight * (duration / 60);
    
    document.getElementById('cal-value').textContent = calories.toFixed(0) + ' kcal';
    document.getElementById('cal-result').classList.remove('hidden');
}

function calculateAge() {
    const dob = new Date(document.getElementById('dob-date').value);
    const today = new Date();
    
    if (!document.getElementById('dob-date').value) {
        alert('Please select a date');
        return;
    }
    
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    
    let months = today.getMonth() - dob.getMonth();
    if (months < 0) months += 12;
    
    let days = today.getDate() - dob.getDate();
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    
    document.getElementById('age-value').textContent = age + ' years';
    document.getElementById('age-exact').textContent = age + 'y ' + months + 'm ' + days + 'd';
    document.getElementById('age-result').classList.remove('hidden');
}

function calculateIdealWeight() {
    const gender = document.getElementById('ideal-gender').value;
    const height = parseFloat(document.getElementById('ideal-height').value);
    
    if (isNaN(height)) {
        alert('Please enter valid values');
        return;
    }
    
    // Devine formula
    let minWeight, maxWeight;
    if (gender === 'male') {
        minWeight = 50 + (height - 150) * 0.75;
        maxWeight = minWeight + 10;
    } else {
        minWeight = 45.5 + (height - 150) * 0.67;
        maxWeight = minWeight + 10;
    }
    
    document.getElementById('ideal-value').textContent = minWeight.toFixed(1) + ' - ' + maxWeight.toFixed(1) + ' kg';
    document.getElementById('ideal-result').classList.remove('hidden');
}

// Math Functions
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function calculateGCDLCM() {
    const first = parseInt(document.getElementById('gcd-first').value);
    const second = parseInt(document.getElementById('gcd-second').value);
    
    if (isNaN(first) || isNaN(second)) {
        alert('Please enter valid numbers');
        return;
    }
    
    const gcdValue = gcd(Math.abs(first), Math.abs(second));
    const lcmValue = lcm(Math.abs(first), Math.abs(second));
    
    document.getElementById('gcd-value').textContent = gcdValue;
    document.getElementById('lcm-value').textContent = lcmValue;
    document.getElementById('gcd-result').classList.remove('hidden');
}

function updateAreaInputs() {
    const shape = document.getElementById('area-shape').value;
    let html = '';
    
    switch(shape) {
        case 'circle':
            html = '<div class="input-group"><label class="input-label">Radius</label><input type="number" id="area-val1" placeholder="Enter radius" step="0.01"></div>';
            break;
        case 'square':
            html = '<div class="input-group"><label class="input-label">Side</label><input type="number" id="area-val1" placeholder="Enter side" step="0.01"></div>';
            break;
        case 'rectangle':
            html = '<div class="input-row"><div class="input-group"><label class="input-label">Length</label><input type="number" id="area-val1" placeholder="Enter length" step="0.01"></div><div class="input-group"><label class="input-label">Width</label><input type="number" id="area-val2" placeholder="Enter width" step="0.01"></div></div>';
            break;
        case 'triangle':
            html = '<div class="input-row"><div class="input-group"><label class="input-label">Base</label><input type="number" id="area-val1" placeholder="Enter base" step="0.01"></div><div class="input-group"><label class="input-label">Height</label><input type="number" id="area-val2" placeholder="Enter height" step="0.01"></div></div>';
            break;
    }
    
    document.getElementById('area-inputs').innerHTML = html;
}

function calculateArea() {
    const shape = document.getElementById('area-shape').value;
    let area = 0;
    
    switch(shape) {
        case 'circle':
            const radius = parseFloat(document.getElementById('area-val1').value);
            if (isNaN(radius)) { alert('Please enter radius'); return; }
            area = Math.PI * radius * radius;
            break;
        case 'square':
            const side = parseFloat(document.getElementById('area-val1').value);
            if (isNaN(side)) { alert('Please enter side'); return; }
            area = side * side;
            break;
        case 'rectangle':
            const length = parseFloat(document.getElementById('area-val1').value);
            const width = parseFloat(document.getElementById('area-val2').value);
            if (isNaN(length) || isNaN(width)) { alert('Please enter length and width'); return; }
            area = length * width;
            break;
        case 'triangle':
            const base = parseFloat(document.getElementById('area-val1').value);
            const height = parseFloat(document.getElementById('area-val2').value);
            if (isNaN(base) || isNaN(height)) { alert('Please enter base and height'); return; }
            area = (base * height) / 2;
            break;
    }
    
    document.getElementById('area-value').textContent = area.toFixed(2) + ' sq units';
    document.getElementById('area-result').classList.remove('hidden');
}

function updateVolumeInputs() {
    const shape = document.getElementById('vol-shape').value;
    let html = '';
    
    switch(shape) {
        case 'sphere':
            html = '<div class="input-group"><label class="input-label">Radius</label><input type="number" id="vol-val1" placeholder="Enter radius" step="0.01"></div>';
            break;
        case 'cube':
            html = '<div class="input-group"><label class="input-label">Side</label><input type="number" id="vol-val1" placeholder="Enter side" step="0.01"></div>';
            break;
        case 'cylinder':
            html = '<div class="input-row"><div class="input-group"><label class="input-label">Radius</label><input type="number" id="vol-val1" placeholder="Enter radius" step="0.01"></div><div class="input-group"><label class="input-label">Height</label><input type="number" id="vol-val2" placeholder="Enter height" step="0.01"></div></div>';
            break;
        case 'cone':
            html = '<div class="input-row"><div class="input-group"><label class="input-label">Radius</label><input type="number" id="vol-val1" placeholder="Enter radius" step="0.01"></div><div class="input-group"><label class="input-label">Height</label><input type="number" id="vol-val2" placeholder="Enter height" step="0.01"></div></div>';
            break;
    }
    
    document.getElementById('vol-inputs').innerHTML = html;
}

function calculateVolume() {
    const shape = document.getElementById('vol-shape').value;
    let volume = 0;
    
    switch(shape) {
        case 'sphere':
            const radius = parseFloat(document.getElementById('vol-val1').value);
            if (isNaN(radius)) { alert('Please enter radius'); return; }
            volume = (4/3) * Math.PI * Math.pow(radius, 3);
            break;
        case 'cube':
            const side = parseFloat(document.getElementById('vol-val1').value);
            if (isNaN(side)) { alert('Please enter side'); return; }
            volume = Math.pow(side, 3);
            break;
        case 'cylinder':
            const cylRadius = parseFloat(document.getElementById('vol-val1').value);
            const cylHeight = parseFloat(document.getElementById('vol-val2').value);
            if (isNaN(cylRadius) || isNaN(cylHeight)) { alert('Please enter radius and height'); return; }
            volume = Math.PI * Math.pow(cylRadius, 2) * cylHeight;
            break;
        case 'cone':
            const coneRadius = parseFloat(document.getElementById('vol-val1').value);
            const coneHeight = parseFloat(document.getElementById('vol-val2').value);
            if (isNaN(coneRadius) || isNaN(coneHeight)) { alert('Please enter radius and height'); return; }
            volume = (1/3) * Math.PI * Math.pow(coneRadius, 2) * coneHeight;
            break;
    }
    
    document.getElementById('vol-value').textContent = volume.toFixed(2) + ' cubic units';
    document.getElementById('vol-result').classList.remove('hidden');
}

function calculatePower() {
    const base = parseFloat(document.getElementById('pow-base').value);
    const exp = parseFloat(document.getElementById('pow-exp').value);
    
    if (isNaN(base) || isNaN(exp)) {
        alert('Please enter valid numbers');
        return;
    }
    
    const result = Math.pow(base, exp);
    
    document.getElementById('pow-value').textContent = result.toFixed(4);
    document.getElementById('pow-result').classList.remove('hidden');
}

// Education Functions
let gpaRows = 0;
let cgpaRows = 0;

function addGPARow() {
    gpaRows++;
    const container = document.getElementById('gpa-inputs');
    const row = document.createElement('div');
    row.className = 'input-row';
    row.innerHTML = `
        <div class="input-group">
            <label class="input-label">Grade</label>
            <input type="number" class="gpa-grade" placeholder="Enter grade" step="0.1" min="0" max="4">
        </div>
        <div class="input-group">
            <label class="input-label">Credits</label>
            <input type="number" class="gpa-credit" placeholder="Enter credits" step="0.1" min="0">
        </div>
    `;
    container.appendChild(row);
}

function calculateGPA() {
    const grades = document.querySelectorAll('.gpa-grade');
    const credits = document.querySelectorAll('.gpa-credit');
    
    if (grades.length === 0) {
        alert('Please add at least one subject');
        return;
    }
    
    let totalGPA = 0;
    let totalCredits = 0;
    
    for (let i = 0; i < grades.length; i++) {
        const grade = parseFloat(grades[i].value);
        const credit = parseFloat(credits[i].value);
        
        if (!isNaN(grade) && !isNaN(credit)) {
            totalGPA += grade * credit;
            totalCredits += credit;
        }
    }
    
    if (totalCredits === 0) {
        alert('Please enter valid grades and credits');
        return;
    }
    
    const gpa = totalGPA / totalCredits;
    document.getElementById('gpa-value').textContent = gpa.toFixed(2);
    document.getElementById('gpa-result').classList.remove('hidden');
}

function calculateStudentPercentage() {
    const obtained = parseFloat(document.getElementById('stud-obtained').value);
    const total = parseFloat(document.getElementById('stud-total').value);
    
    if (isNaN(obtained) || isNaN(total)) {
        alert('Please enter valid values');
        return;
    }
    
    const percentage = (obtained / total) * 100;
    let grade = 'F';
    
    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B';
    else if (percentage >= 60) grade = 'C';
    else if (percentage >= 50) grade = 'D';
    
    document.getElementById('stud-percent').textContent = percentage.toFixed(2) + '%';
    document.getElementById('stud-grade').textContent = grade;
    document.getElementById('stud-result').classList.remove('hidden');
}

function addCGPARow() {
    cgpaRows++;
    const container = document.getElementById('cgpa-inputs');
    const row = document.createElement('div');
    row.className = 'input-row';
    row.innerHTML = `
        <div class="input-group">
            <label class="input-label">GPA</label>
            <input type="number" class="cgpa-gpa" placeholder="Enter GPA" step="0.1" min="0" max="4">
        </div>
        <div class="input-group">
            <label class="input-label">Credits</label>
            <input type="number" class="cgpa-credit" placeholder="Enter credits" step="0.1" min="0">
        </div>
    `;
    container.appendChild(row);
}

function calculateCGPA() {
    const gpas = document.querySelectorAll('.cgpa-gpa');
    const credits = document.querySelectorAll('.cgpa-credit');
    
    if (gpas.length === 0) {
        alert('Please add at least one semester');
        return;
    }
    
    let totalCGPA = 0;
    let totalCredits = 0;
    
    for (let i = 0; i < gpas.length; i++) {
        const gpa = parseFloat(gpas[i].value);
        const credit = parseFloat(credits[i].value);
        
        if (!isNaN(gpa) && !isNaN(credit)) {
            totalCGPA += gpa * credit;
            totalCredits += credit;
        }
    }
    
    if (totalCredits === 0) {
        alert('Please enter valid GPA and credits');
        return;
    }
    
    const cgpa = totalCGPA / totalCredits;
    document.getElementById('cgpa-value').textContent = cgpa.toFixed(2);
    document.getElementById('cgpa-result').classList.remove('hidden');
}

function updateResultType() {
    const type = document.getElementById('result-type').value;
    const container = document.getElementById('result-inputs');
    
    if (type === 'need') {
        container.innerHTML = `
            <div class="input-group">
                <label class="input-label">Current Marks</label>
                <input type="number" id="result-current" placeholder="Enter current marks" step="0.01">
            </div>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Target Percentage</label>
                    <input type="number" id="result-target" placeholder="Enter target %" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Total Marks</label>
                    <input type="number" id="result-total" placeholder="Enter total" step="0.01">
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div id="average-inputs"></div>
            <button class="btn-secondary" onclick="addAverageRow()" style="margin-top: 1rem; margin-bottom: 1rem;">+ Add Subject</button>
        `;
    }
}

function calculateResult() {
    const type = document.getElementById('result-type').value;
    
    if (type === 'need') {
        const current = parseFloat(document.getElementById('result-current').value);
        const target = parseFloat(document.getElementById('result-target').value);
        const total = parseFloat(document.getElementById('result-total').value);
        
        if (isNaN(current) || isNaN(target) || isNaN(total)) {
            alert('Please enter valid values');
            return;
        }
        
        const needed = (target / 100) * total - current;
        document.getElementById('result-value').textContent = Math.max(0, needed.toFixed(2)) + ' marks';
    }
    
    document.getElementById('result-result').classList.remove('hidden');
}

function addAverageRow() {
    const container = document.getElementById('average-inputs');
    const row = document.createElement('div');
    row.className = 'input-row';
    row.innerHTML = `
        <div class="input-group">
            <label class="input-label">Marks</label>
            <input type="number" class="avg-marks" placeholder="Enter marks" step="0.01">
        </div>
        <div class="input-group">
            <label class="input-label">Weight</label>
            <input type="number" class="avg-weight" placeholder="Enter weight" step="0.01">
        </div>
    `;
    container.appendChild(row);
}

// Initialize on page load
window.addEventListener('load', function() {
    updateAreaInputs();
    updateVolumeInputs();
    updateResultType();
    addGPARow();
    addCGPARow();
});
