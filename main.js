const filterBox = document.querySelectorAll('.product');

var fvolskl = document.querySelector('#fvolskl').textContent.match(/\d+/)[0];
var svolskl = document.querySelector('#svolskl').textContent.match(/\d+/)[0];
var tvolskl = document.querySelector('#tvolskl').textContent.match(/\d+/)[0];
var fovolskl = document.querySelector('#fovolskl').textContent.match(/\d+/)[0];

function getType()
{
    let selectedValue = type.value;
    return selectedValue;
}
function getVolume()
{
    let selectedVolume = volume.value;
    return selectedVolume;
}
document.querySelector('.filterit').addEventListener('click', event =>
{
    filterBox.forEach(elem =>
    {
        elem.classList.remove('hide');
        if (!elem.classList.contains(getType())) /*&& !elem.classList.contains('alltype'))*/
        {
            console.log();
            elem.classList.add('hide');
        }
        else
        {
            elem.classList.remove('hide');
        }
        if (!elem.classList.contains(getVolume()) && !elem.classList.contains('hide'))
            {
                console.log();
                elem.classList.add('hide');
            }
            
    });
});
function showCount(value)
{
    switch(value)
    {
        case 1:
            var pr = document.querySelector('#firstprod');
            /*firp.style.cssText += 
            `
                display: block;
            `*/
            show(pr);
            break;
        case 2:
            pr = document.querySelector('#secondprod');
            show(pr);
            break;
        case 3:
            pr = document.querySelector('#thirdprod');
            show(pr);
            break;
        case 4:
            pr = document.querySelector('#fourthprod');
            show(pr);
            break;
        case 5:
            pr = document.querySelector('#fifthprod');
            show(pr);
            break;
    }
}
function show(pr)
{
    pr.style.cssText +=
    `
        display: block;
    `
    return pr;
}

function moveToBas(volume, coffee, volskl)
{
    if(volume.value != '')
    {
        if (!(volume.value > parseInt(volskl.textContent.match(/\d+/)[0])))
            {
                let massive = [];
                massive.push(volume.value, coffee.textContent);
                volskl.textContent = 'Объём на складе: ' + (parseInt(volskl.textContent.match(/\d+/)[0] - volume.value)) + 'г';
                let b = document.getElementById("cof");
            /*    massive.forEach(e => b.innerHTML += "<p>" + e + "</p>");*/
                var str ='';
                massive.forEach(function(item, i, arr) 
                {
                   /* alert(i + ": " + item + " (массив: " + arr + ")");*/
                    if (i == 0)
                    {
                        str += item + ' грамм ';
                    }
                    else
                    {
                        str += item;
                    }
                });
                console.log(str);
                b.innerHTML += "<p>" + str + "</p>";
                console.log(volume.value);
                console.log(coffee.textContent);
                /*let coffee = document.querySelector('#cof')*/
            }
            else
            {
                alert('У нас столько нету');
            }
    }
    else
    {
        alert('Число-то введите');
    }
    
}
function submitOrder()
{
    let elem = document.querySelector('#cof');
    if ((document.querySelector('#name').value != '') || (document.querySelector('#adress').value != ''))
    {
        while(elem.hasChildNodes())
        {
            elem.removeChild(elem.firstChild);
        }
        document.querySelector('.delivr').style.display = 'block';

        const truck = document.getElementById('truck');
        truck.style.display = 'block'; // Показываем грузовик
        truck.style.animation = 'none'; // Сбрасываем анимацию, если она уже была запущена*/
        setTimeout(() => 
        {
            truck.style.animation = 'driveRight 5s linear forwards'; // Назначаем анимацию
        }, 100); // Задержка нужна, чтобы CSS успел переустановить свойство animation
        
        setTimeout(() => 
        {
            document.querySelector('.delivr').style.display = 'none';
        }, 1000);
        truck.addEventListener('animationend', function() 
        {
            truck.style.display = 'none'; // Скрываем грузовик после завершения анимации
        });
    }
    else
    {
        alert('Введите имя и адрес');
    }
    
    
}