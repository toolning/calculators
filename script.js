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
        
        <!-- Percentage Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Calculate Percentage</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Value (Part)</label>
                    <input type="number" id="pct-part" placeholder="Enter part value" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Total (Whole)</label>
                    <input type="number" id="pct-whole" placeholder="Enter total value" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculatePercentage()">Calculate Percentage</button>
            <div id="pct-result" class="result-box hidden">
                <div class="result-label">Percentage:</div>
                <div class="result-value" id="pct-value">0%</div>
            </div>
        </div>

        <!-- Percentage Increase/Decrease -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Percentage Increase/Decrease</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Original Value</label>
                    <input type="number" id="pct-orig" placeholder="Enter original value" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">New Value</label>
                    <input type="number" id="pct-new" placeholder="Enter new value" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculatePercentageChange()">Calculate Change</button>
            <div id="pct-change-result" class="result-box hidden">
                <div class="result-label">Change:</div>
                <div class="result-value" id="pct-change-value">0%</div>
            </div>
        </div>

        <!-- Discount Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Discount Calculator</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Original Price</label>
                    <input type="number" id="disc-orig" placeholder="Enter original price" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Discount %</label>
                    <input type="number" id="disc-percent" placeholder="Enter discount percentage" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateDiscount()">Calculate Discount</button>
            <div id="disc-result" class="result-box hidden">
                <div class="result-label">Discount Amount:</div>
                <div class="result-value" id="disc-amount">$0.00</div>
                <div class="result-label mt-4">Final Price:</div>
                <div class="result-value" id="disc-final">$0.00</div>
            </div>
        </div>

        <!-- Markup Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Markup Calculator</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Cost Price</label>
                    <input type="number" id="markup-cost" placeholder="Enter cost price" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Markup %</label>
                    <input type="number" id="markup-percent" placeholder="Enter markup percentage" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateMarkup()">Calculate Markup</button>
            <div id="markup-result" class="result-box hidden">
                <div class="result-label">Markup Amount:</div>
                <div class="result-value" id="markup-amount">$0.00</div>
                <div class="result-label mt-4">Selling Price:</div>
                <div class="result-value" id="markup-price">$0.00</div>
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
                <label class="input-label">Loan Amount ($)</label>
                <input type="number" id="emi-principal" placeholder="Enter loan amount" step="0.01">
            </div>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Annual Interest Rate (%)</label>
                    <input type="number" id="emi-rate" placeholder="Enter interest rate" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Loan Tenure (Months)</label>
                    <input type="number" id="emi-months" placeholder="Enter months" step="1">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateEMI()">Calculate EMI</button>
            <div id="emi-result" class="result-box hidden">
                <div class="result-label">Monthly EMI:</div>
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
                <label class="input-label">Principal Amount ($)</label>
                <input type="number" id="si-principal" placeholder="Enter principal amount" step="0.01">
            </div>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Annual Rate of Interest (%)</label>
                    <input type="number" id="si-rate" placeholder="Enter interest rate" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Time Period (Years)</label>
                    <input type="number" id="si-time" placeholder="Enter time period" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateSimpleInterest()">Calculate Interest</button>
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
                <label class="input-label">Principal Amount ($)</label>
                <input type="number" id="ci-principal" placeholder="Enter principal amount" step="0.01">
            </div>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Annual Interest Rate (%)</label>
                    <input type="number" id="ci-rate" placeholder="Enter interest rate" step="0.01">
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
            <button class="btn-primary" onclick="calculateCompoundInterest()">Calculate Interest</button>
            <div id="ci-result" class="result-box hidden">
                <div class="result-label">Compound Interest:</div>
                <div class="result-value" id="ci-value">$0.00</div>
                <div class="result-label mt-4">Total Amount:</div>
                <div class="result-value" id="ci-total">$0.00</div>
            </div>
        </div>

        <!-- Investment Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Investment Calculator</h3>
            <div class="input-group">
                <label class="input-label">Initial Investment ($)</label>
                <input type="number" id="inv-initial" placeholder="Enter initial amount" step="0.01">
            </div>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Annual Return (%)</label>
                    <input type="number" id="inv-return" placeholder="Enter annual return" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Investment Period (Years)</label>
                    <input type="number" id="inv-years" placeholder="Enter years" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateInvestment()">Calculate Returns</button>
            <div id="inv-result" class="result-box hidden">
                <div class="result-label">Final Amount:</div>
                <div class="result-value" id="inv-final">$0.00</div>
                <div class="result-label mt-4">Total Profit:</div>
                <div class="result-value" id="inv-profit">$0.00</div>
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
                <label class="input-label">Value to Convert</label>
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
                <label class="input-label">Value to Convert</label>
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
                <label class="input-label">Value to Convert</label>
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
                    <input type="number" id="bmi-height" placeholder="Enter height in cm" step="0.1">
                </div>
                <div class="input-group">
                    <label class="input-label">Weight (kg)</label>
                    <input type="number" id="bmi-weight" placeholder="Enter weight in kg" step="0.1">
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
                    <label class="input-label">Exercise Duration (minutes)</label>
                    <input type="number" id="cal-duration" placeholder="Enter duration" step="1">
                </div>
            </div>
            <div class="input-group">
                <label class="input-label">Exercise Type</label>
                <select id="cal-type">
                    <option value="4.5">Walking (3 mph)</option>
                    <option value="6">Running (5 mph)</option>
                    <option value="7.5">Running (6 mph)</option>
                    <option value="9">Running (7 mph)</option>
                    <option value="6">Cycling (10 mph)</option>
                    <option value="8">Cycling (15 mph)</option>
                    <option value="6">Swimming</option>
                    <option value="8">Basketball</option>
                </select>
            </div>
            <button class="btn-primary" onclick="calculateCaloriBurn()">Calculate Calories</button>
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
                <div class="result-label mt-4">Exact Age:</div>
                <div class="result-value" id="age-exact" style="font-size: 1.2rem;">0y 0m 0d</div>
            </div>
        </div>

        <!-- BMR Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">BMR Calculator</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Gender</label>
                    <select id="bmr-gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div class="input-group">
                    <label class="input-label">Age (years)</label>
                    <input type="number" id="bmr-age" placeholder="Enter age" step="1">
                </div>
            </div>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Height (cm)</label>
                    <input type="number" id="bmr-height" placeholder="Enter height" step="0.1">
                </div>
                <div class="input-group">
                    <label class="input-label">Weight (kg)</label>
                    <input type="number" id="bmr-weight" placeholder="Enter weight" step="0.1">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateBMR()">Calculate BMR</button>
            <div id="bmr-result" class="result-box hidden">
                <div class="result-label">Basal Metabolic Rate:</div>
                <div class="result-value" id="bmr-value">0 kcal/day</div>
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
                    <input type="number" id="gcd-first" placeholder="Enter first number" step="1">
                </div>
                <div class="input-group">
                    <label class="input-label">Second Number</label>
                    <input type="number" id="gcd-second" placeholder="Enter second number" step="1">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateGCDLCM()">Calculate</button>
            <div id="gcd-result" class="result-box hidden">
                <div class="result-label">GCD (Greatest Common Divisor):</div>
                <div class="result-value" id="gcd-value">0</div>
                <div class="result-label mt-4">LCM (Least Common Multiple):</div>
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

        <!-- Power Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Power Calculator</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Base</label>
                    <input type="number" id="pow-base" placeholder="Enter base" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Exponent</label>
                    <input type="number" id="pow-exp" placeholder="Enter exponent" step="0.01">
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
        
        <!-- GPA Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">GPA Calculator</h3>
            <div id="gpa-inputs"></div>
            <button class="btn-secondary" onclick="addGPARow()" style="margin-top: 1rem; margin-bottom: 1rem;">+ Add Subject</button>
            <button class="btn-primary" onclick="calculateGPA()">Calculate GPA</button>
            <div id="gpa-result" class="result-box hidden">
                <div class="result-label">GPA:</div>
                <div class="result-value" id="gpa-value">0.00</div>
            </div>
        </div>

        <!-- Percentage Calculator -->
        <div class="calculator-box fade-in">
            <h3 class="calculator-title">Student Percentage Calculator</h3>
            <div class="input-row">
                <div class="input-group">
                    <label class="input-label">Obtained Marks</label>
                    <input type="number" id="stud-obtained" placeholder="Enter obtained marks" step="0.01">
                </div>
                <div class="input-group">
                    <label class="input-label">Total Marks</label>
                    <input type="number" id="stud-total" placeholder="Enter total marks" step="0.01">
                </div>
            </div>
            <button class="btn-primary" onclick="calculateStudentPercentage()">Calculate Percentage</button>
            <div id="stud-result" class="result-box hidden">
                <div class="result-label">Percentage:</div>
                <div class="result-value" id="stud-percent">0%</div>
                <div class="result-label mt-4">Grade:</div>
                <div class="result-value" id="stud-grade">F</div>
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
    `;
}

// CALCULATION FUNCTIONS

// Percentage Functions
function calculatePercentage() {
    const part = parseFloat(document.getElementById('pct-part').value);
    const whole = parseFloat(document.getElementById('pct-whole').value);
    
    if (!part || !whole || whole === 0) {
        alert('Please enter valid numbers');
        return;
    }
    
    const percentage = (part / whole) * 100;
    document.getElementById('pct-value').textContent = percentage.toFixed(2) + '%';
    document.getElementById('pct-result').classList.remove('hidden');
}

function calculatePercentageChange() {
    const original = parseFloat(document.getElementById('pct-orig').value);
    const newVal = parseFloat(document.getElementById('pct-new').value);
    
    if (!original || !newVal || original === 0) {
        alert('Please enter valid numbers');
        return;
    }
    
    const change = ((newVal - original) / original) * 100;
    document.getElementById('pct-change-value').textContent = change.toFixed(2) + '%';
    document.getElementById('pct-change-result').classList.remove('hidden');
}

function calculateDiscount() {
    const original = parseFloat(document.getElementById('disc-orig').value);
    const discount = parseFloat(document.getElementById('disc-percent').value);
    
    if (!original || !discount) {
        alert('Please enter valid numbers');
        return;
    }
    
    const discountAmount = (original * discount) / 100;
    const finalPrice = original - discountAmount;
    
    document.getElementById('disc-amount').textContent = '$' + discountAmount.toFixed(2);
    document.getElementById('disc-final').textContent = '$' + finalPrice.toFixed(2);
    document.getElementById('disc-result').classList.remove('hidden');
}

function calculateMarkup() {
    const cost = parseFloat(document.getElementById('markup-cost').value);
    const markup = parseFloat(document.getElementById('markup-percent').value);
    
    if (!cost || !markup) {
        alert('Please enter valid numbers');
        return;
    }
    
    const markupAmount = (cost * markup) / 100;
    const sellingPrice = cost + markupAmount;
    
    document.getElementById('markup-amount').textContent = '$' + markupAmount.toFixed(2);
    document.getElementById('markup-price').textContent = '$' + sellingPrice.toFixed(2);
    document.getElementById('markup-result').classList.remove('hidden');
}

// Financial Functions
function calculateEMI() {
    const principal = parseFloat(document.getElementById('emi-principal').value);
    const rate = parseFloat(document.getElementById('emi-rate').value);
    const months = parseFloat(document.getElementById('emi-months').value);
    
    if (!principal || !rate || !months) {
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
    
    if (!principal || !rate || !time) {
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
    
    if (!principal || !rate || !time) {
        alert('Please enter valid numbers');
        return;
    }
    
    const amount = principal * Math.pow(1 + rate / (100 * compound), compound * time);
    const interest = amount - principal;
    
    document.getElementById('ci-value').textContent = '$' + interest.toFixed(2);
    document.getElementById('ci-total').textContent = '$' + amount.toFixed(2);
    document.getElementById('ci-result').classList.remove('hidden');
}

function calculateInvestment() {
    const initial = parseFloat(document.getElementById('inv-initial').value);
    const returnRate = parseFloat(document.getElementById('inv-return').value);
    const years = parseFloat(document.getElementById('inv-years').value);
    
    if (!initial || !returnRate || !years) {
        alert('Please enter valid numbers');
        return;
    }
    
    const finalAmount = initial * Math.pow(1 + returnRate / 100, years);
    const profit = finalAmount - initial;
    
    document.getElementById('inv-final').textContent = '$' + finalAmount.toFixed(2);
    document.getElementById('inv-profit').textContent = '$' + profit.toFixed(2);
    document.getElementById('inv-result').classList.remove('hidden');
}

// Conversion Functions
function convertLength() {
    const from = document.getElementById('len-from').value;
    const to = document.getElementById('len-to').value;
    const value = parseFloat(document.getElementById('len-value').value);
    
    if (!value) {
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
    
    if (!value) {
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
    
    // Convert to Celsius first
    if (from === 'c') {
        celsius = value;
    } else if (from === 'f') {
        celsius = (value - 32) * 5 / 9;
    } else if (from === 'k') {
        celsius = value - 273.15;
    }
    
    // Convert from Celsius to target
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
    
    if (!height || !weight) {
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
    
    if (!weight || !duration) {
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
    
    // Calculate exact age
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

function calculateBMR() {
    const gender = document.getElementById('bmr-gender').value;
    const age = parseFloat(document.getElementById('bmr-age').value);
    const height = parseFloat(document.getElementById('bmr-height').value);
    const weight = parseFloat(document.getElementById('bmr-weight').value);
    
    if (!age || !height || !weight) {
        alert('Please enter valid values');
        return;
    }
    
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    
    document.getElementById('bmr-value').textContent = bmr.toFixed(0) + ' kcal/day';
    document.getElementById('bmr-result').classList.remove('hidden');
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
    
    if (!first || !second) {
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
            html = '<div class="input-group"><label class="input-label">Side</label><input type="number" id="area-val1" placeholder="Enter side length" step="0.01"></div>';
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
            if (!radius) { alert('Please enter radius'); return; }
            area = Math.PI * radius * radius;
            break;
        case 'square':
            const side = parseFloat(document.getElementById('area-val1').value);
            if (!side) { alert('Please enter side'); return; }
            area = side * side;
            break;
        case 'rectangle':
            const length = parseFloat(document.getElementById('area-val1').value);
            const width = parseFloat(document.getElementById('area-val2').value);
            if (!length || !width) { alert('Please enter length and width'); return; }
            area = length * width;
            break;
        case 'triangle':
            const base = parseFloat(document.getElementById('area-val1').value);
            const height = parseFloat(document.getElementById('area-val2').value);
            if (!base || !height) { alert('Please enter base and height'); return; }
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
            html = '<div class="input-group"><label class="input-label">Side</label><input type="number" id="vol-val1" placeholder="Enter side length" step="0.01"></div>';
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
            if (!radius) { alert('Please enter radius'); return; }
            volume = (4/3) * Math.PI * Math.pow(radius, 3);
            break;
        case 'cube':
            const side = parseFloat(document.getElementById('vol-val1').value);
            if (!side) { alert('Please enter side'); return; }
            volume = Math.pow(side, 3);
            break;
        case 'cylinder':
            const cylRadius = parseFloat(document.getElementById('vol-val1').value);
            const cylHeight = parseFloat(document.getElementById('vol-val2').value);
            if (!cylRadius || !cylHeight) { alert('Please enter radius and height'); return; }
            volume = Math.PI * Math.pow(cylRadius, 2) * cylHeight;
            break;
        case 'cone':
            const coneRadius = parseFloat(document.getElementById('vol-val1').value);
            const coneHeight = parseFloat(document.getElementById('vol-val2').value);
            if (!coneRadius || !coneHeight) { alert('Please enter radius and height'); return; }
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
            <label class="input-label">Subject Name</label>
            <input type="text" class="gpa-subject" placeholder="Enter subject name">
        </div>
        <div class="input-group">
            <label class="input-label">Grade (0-4)</label>
            <input type="number" class="gpa-grade" placeholder="Enter grade" step="0.1" min="0" max="4">
        </div>
    `;
    container.appendChild(row);
}

function calculateGPA() {
    const grades = document.querySelectorAll('.gpa-grade');
    if (grades.length === 0) {
        alert('Please add at least one subject');
        return;
    }
    
    let totalGPA = 0;
    let count = 0;
    
    grades.forEach(grade => {
        const value = parseFloat(grade.value);
        if (value >= 0 && value <= 4) {
            totalGPA += value;
            count++;
        }
    });
    
    if (count === 0) {
        alert('Please enter valid grades');
        return;
    }
    
    const gpa = totalGPA / count;
    document.getElementById('gpa-value').textContent = gpa.toFixed(2);
    document.getElementById('gpa-result').classList.remove('hidden');
}

function calculateStudentPercentage() {
    const obtained = parseFloat(document.getElementById('stud-obtained').value);
    const total = parseFloat(document.getElementById('stud-total').value);
    
    if (!obtained || !total) {
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
            <label class="input-label">Semester Name</label>
            <input type="text" class="cgpa-semester" placeholder="Enter semester">
        </div>
        <div class="input-group">
            <label class="input-label">GPA (0-4)</label>
            <input type="number" class="cgpa-gpa" placeholder="Enter GPA" step="0.1" min="0" max="4">
        </div>
    `;
    container.appendChild(row);
}

function calculateCGPA() {
    const gpas = document.querySelectorAll('.cgpa-gpa');
    if (gpas.length === 0) {
        alert('Please add at least one semester');
        return;
    }
    
    let totalCGPA = 0;
    let count = 0;
    
    gpas.forEach(gpa => {
        const value = parseFloat(gpa.value);
        if (value >= 0 && value <= 4) {
            totalCGPA += value;
            count++;
        }
    });
    
    if (count === 0) {
        alert('Please enter valid GPA values');
        return;
    }
    
    const cgpa = totalCGPA / count;
    document.getElementById('cgpa-value').textContent = cgpa.toFixed(2);
    document.getElementById('cgpa-result').classList.remove('hidden');
}

// Initialize area inputs on page load
window.addEventListener('load', function() {
    updateAreaInputs();
    updateVolumeInputs();
    addGPARow();
    addCGPARow();
});