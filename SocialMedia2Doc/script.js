let swiper=new Swiper(".mySwiper",{
    slidesPerView:6,
    spaceBetween:5,
})


window.addEventListener('scroll',()=>{
    document.querySelector('.profile-popup').style.display='none'
    document.querySelector('.add-post-popup').style.display='none'
    document.querySelector('.theme-customize').style.display='none'
})

let menuItem = document.querySelectorAll('.menu-item');

const removeActive=()=>{
    menuItem.forEach(item=>{
        item.classList.remove('active')
    })
}

menuItem.forEach(item=>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');
    })
})


/*document.querySelector('#Notify-box').addEventListener('click',()=>{
    document.querySelector('.notification-box').style.display='block'
    document.querySelector('#ntCounter1').style.display='none'
})

document.querySelector('#messageMenu').addEventListener('click',()=>{
    document.querySelector('#notfyCounter2').style.display='none'
    document.querySelector('.messages').classList.toggle('boxshadow1')
})*/

//............................    Friend Request.................................

let Accept=document.querySelectorAll('#Accept');
let Delete=document.querySelectorAll('#Delete');
let action=document.querySelectorAll('.action');
let request=document.querySelectorAll('.request');

Accept.forEach(accept=>{
    accept.addEventListener('click',()=>{
        accept.parentElement.style.display='none';
        accept.parentElement.parentElement.querySelector('.alert').style.display='block';
    })
})
Delete.forEach(del=>{
    del.addEventListener('click',()=>{
        del.parentElement.style.display='none';
    })
})


document.querySelectorAll('#my-profile-picture').forEach(AllProfile=>{
    AllProfile.addEventListener('click',()=>{
        document.querySelector('.profile-popup').style.display='flex'
    })
});






document.querySelectorAll('.close').forEach(AllCloser=>{
    AllCloser.addEventListener('click',()=>{
        document.querySelector('.profile-popup').style.display='none'
        document.querySelector('.add-post-popup').style.display='none'
        document.querySelector('.theme-customize').style.display='none'
    })
});


document.querySelector('#profile-upload').addEventListener('change',()=>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllProfileImg=>{
        AllProfileImg.src = URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
});


document.querySelector('#crate-lg').addEventListener('click',()=>{
    document.querySelector('.add-post-popup').style.display='flex'
})

document.querySelector('#feed-pic-upload').addEventListener('change',()=>{
    document.querySelector('#post-IMg').src = URL.createObjectURL(document.querySelector("#feed-pic-upload").file[0])
})

document.querySelector("#add-story").addEventListener('change',()=>{
    document.querySelector('.story img').src=URL.createObjectURL(document.querySelector("#add-story").files[0]);
    document.querySelector('.add-story').style.display='none'

})

document.querySelector('.mini-button').addEventListener('click',()=>{
    document.querySelector('.input-post').classList.add('boxshadow1')
})
document.querySelector('.mini-button').addEventListener('dblclick',()=>{
    document.querySelector('.add-post-popup').style.display='flex'
})





document.querySelector('.action-button span:first-child i').forEach(liked=>{
    liked.addEventListener('click',()=>{
        liked.classList.toggle('liked');
    })
})

setTimeout(()=>{
    document.querySelector('.input-post').classList.remove('boxshadow1')
    document.querySelector('.messages').classList.toggle('boxshadow1')
},300)

document.querySelector('#theme').addEventListener('click',()=>{
    document.querySelector('.theme-customize').style.display='flex'
})