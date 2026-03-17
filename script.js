let rooms = document.querySelector('.rooms')
let data = [{
        name: 'Комната двухместная',
        price: 1000,
        curency: '$',
        about: "Удобная комната, комфортная, лучшая",
        photo: 'src/XXXL (18).webp'
    },
]

for (r of data) {
    let room = document.createElement('article')
    room.classList.add('flex')
    room.innerHTML = `
                        <div class="karycel">
                            <img src="${r.photo}" alt="">
                        </div>
                        <div class="flex vertical info">
                            <h2>${r.name}</h2>
                            <p>${r.about}</p>
                            <div class='flex book       '>
                                <h3><span>${r.price}</span>${r.curency} за ночь</h3>
                            </div>
                            <details>
                                <summary>Удобства</summary>
                                <ul>
                                    <li>Интернет Wi-Fi</li>
                                    <li>Автостоянка</li>
                                    <li>Дети любого возраста</li>
                                    <li>Есть трансфер</li>
                                    <li>Сейф</li>
                                    <li>Зеленый двор</li>
                                </ul>
                            </details>
                        </div>`
    rooms.appendChild(room)
}