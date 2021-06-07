var data = "";
var calcData = [];
var check = 0;

function printScreen(value)
{
    if(check == 1)
        {
            document.getElementById("screen").innerText = "";
            
            data = "";
            calcData.length = 0;
            
            check = 0;
        }
    
    var screen = document.getElementById("screen");

    screen.innerText += value;

    if (value == '/' || value == 'x' || value == '+' || value == '-')
    {
        calcData.push(parseInt(data));
        calcData.push(value);
        data = "";
    }
    
    else
    {
        data += value;
    }
}

function calculate()
{
    calcData.push(parseInt(data));

    for (var j = 1; j <= 4; j++)
    {
        for (var i = 1; i < calcData.length-1; i++)
        {
            if (j == 1 && calcData[i] == '/')
            {
                var temp = calcData[i - 1] / calcData[i + 1];
                calcData[i-1] = temp;
                calcData.splice(i, 2);
                i-=1;
            }
            
            else if (j == 2 && calcData[i] == 'x')
            {
                temp = calcData[i - 1] * calcData[i + 1];
                calcData[i-1] = temp;
                calcData.splice(i, 2);
                i-=1;
            }
            
            else if (j == 3 && calcData[i] == '+')
            {
                temp = calcData[i - 1] + calcData[i + 1];
                calcData[i-1] = temp;
                calcData.splice(i, 2);
                i-=1;
            }
            
            else if (j == 4 && calcData[i] == '-')
            {
                temp = calcData[i - 1] - calcData[i + 1];
                calcData[i-1] = temp;
                calcData.splice(i, 2);
                i-=1;
            }
        }
    }
    
    var screen = document.getElementById("screen");
    screen.innerText = calcData;
    
    check =1;
}
