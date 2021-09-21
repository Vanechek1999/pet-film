/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
let advertising = document.querySelectorAll('.promo__adv img');
let genres = document.querySelector('.promo__genre');
let poster = document.querySelector('.promo__bg');
let placeholder = document.querySelector('.adding__input');
let btnAppend = document.querySelector('.btn_append');
let list = document.querySelector('.promo__interactive-list')
let item;
let itemDelete;
let checkBox = document.querySelector('input[type="checkbox"]')

for (let node of list.childNodes){
    if(node.nodeName == "#text"){
        continue;
    }
    node.remove()
}


advertising.forEach(item =>{
    item.remove()
})



genres.innerHTML = 'драма';
poster.style.background = 'url(img/bg.jpg) center center/cover no-repeat';
function sortFilm(){
    let sortOfFilms = movieDB.movies.sort()
    for (let i = 0; i < movieDB.movies.length; i++) {
        item = document.createElement('li');
        item.classList.add('promo__interactive-item');
        list.append(item)
        itemDelete = document.createElement('div');
        itemDelete.classList.add('delete')
        itemDelete.addEventListener('click', ()=>{
            event.path[1].remove()
            movieDB.movies =  movieDB.movies.map(function(x){ return x.toLowerCase(); })
            for (let y = 0; y<= movieDB.movies.length; y++){
                if(event.path[1].innerText.substr(1).toLowerCase() === movieDB.movies[y]){
                     movieDB.movies.splice([y], 1)
                }
                for (let z = 0; z< movieDB.movies.length; z++){
                    document.querySelector('.promo__interactive-list ').children[z].innerHTML =`${z+1}${movieDB.movies[z]}`;
                }
            }

        })
        sortOfFilms[i].toLowerCase()
        if(sortOfFilms[i].length >= 21){
            document.querySelector('.promo__interactive-list ').children[i].innerHTML = `${i+1}${sortOfFilms[i].slice(0, 21)}...`;
            document.querySelector('.promo__interactive-list ').children[i].append(itemDelete)
        }else{
            document.querySelector('.promo__interactive-list ').children[i].innerHTML = `${i+1}${sortOfFilms[i]}`;
            document.querySelector('.promo__interactive-list ').children[i].append(itemDelete)
        }

    }


}

sortFilm()
function addFilm(){
    event.preventDefault();
    movieDB.movies.push(placeholder.value.toUpperCase());
    console.log(movieDB.movies.sort())
    sortFilm()
    if(checkBox.checked){
        console.log('Добавляем любимый фильм')
    }
}
btnAppend.addEventListener('click', addFilm);











