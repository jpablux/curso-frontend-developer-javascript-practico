const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu ');
const burguerMenu = document.querySelector('.burguerMenu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const ShoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleCartMenu);


function toggleDesktopMenu(){

    const isAsideClosed = ShoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        ShoppingCartContainer.classList.add('inactive');
    }

   desktopMenu.classList.toggle('inactive'); 

}

function toggleMobileMenu(){

    const isAsideClosed = ShoppingCartContainer.classList.contains('inactive');
   
    if(!isAsideClosed){
        ShoppingCartContainer.classList.add('inactive');
    }

   

    mobileMenu.classList.toggle('inactive');
}


function toggleCartMenu(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
   

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    ShoppingCartContainer.classList.toggle('inactive');


}


const productList = [];

productList.push({

name:'Bike',
price: '120',
image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

productList.push({

    name:'Computadora',
    price: '350',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
    })

productList.push({

        name:'Pantalla',
        price: '250',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        
        })


function renderProducts(arr){
    
    for(product of arr){
        
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
      
        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
       
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv=document.createElement('div');
        
        const productPrice=document.createElement('p');
        productPrice.innerText='$'+product.price;
        
        const productName=document.createElement('p');
        productName.innerText=product.name;productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
       
        const productInfoFigure=document.createElement('figure');
        
        const productImgCart=document.createElement('img');
       
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);  
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);