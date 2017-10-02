

<div class="brands-carousel__item">
    <a href="#" title="{{ $title }}" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="{{ $index }}">
        <img src="{{ Image::url(url('storage/uploads/' . $image), 500, 500, ['crop' => true]) }}" alt="{{ $title }}" class="brands-carousel__image" />
        <span class="brands-carousel__link-text">{{ $title }}</span>
    </a>
</div>


{{--  <div class="js-brands-carousel brands-carousel">
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="0">
            <img src="{{ Image::url(url('storage/uploads/products/product1.png'), 500, 500, ['crop' => true]) }}" alt="Chana Atti" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Chana Atti</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="1">
            <img src="{{ Image::url(url('storage/uploads/products/product2.png'), 500, 500, ['crop' => true]) }}" alt="Dettol" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Chana Chilka</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="2">
            <img src="{{ Image::url(url('storage/uploads/products/product3.png'), 500, 500, ['crop' => true]) }}" alt="Lysol" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Daily Feed</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="3">
            <img src="{{ Image::url(url('storage/uploads/products/product4.png'), 500, 500, ['crop' => true]) }}" alt="Durex" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Dates Chora</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="4">
            <img src="{{ Image::url(url('storage/uploads/products/product5.png'), 500, 500, ['crop' => true]) }}" alt="Harpic" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Khushal Mix Atti</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="5">
            <img src="{{ Image::url(url('storage/uploads/products/product6.png'), 500, 500, ['crop' => true]) }}" alt="Air Wick" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Makai Dalya</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="6">
            <img src="{{ Image::url(url('storage/uploads/products/product7.png'), 500, 500, ['crop' => true]) }}" alt="Cillit Bang" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Masoor Atti</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="7">
            <img src="{{ Image::url(url('storage/uploads/products/product8.png'), 500, 500, ['crop' => true]) }}" alt="Mucinex" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Masoor Qutta</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="8">
            <img src="{{ Image::url(url('storage/uploads/products/product9.png'), 500, 500, ['crop' => true]) }}" alt="Mortein" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Milk Booster</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="9">
            <img src="{{ Image::url(url('storage/uploads/products/product10.png'), 500, 500, ['crop' => true]) }}" alt="Nurofen" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Milk Booster Feed</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="10">
            <img src="{{ Image::url(url('storage/uploads/products/product11.png'), 500, 500, ['crop' => true]) }}" alt="Scholl" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Milkona Mix Atti</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="11">
            <img src="{{ Image::url(url('storage/uploads/products/product12.png'), 500, 500, ['crop' => true]) }}" alt="Strepsils" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Mix Atti</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="12">
            <img src="{{ Image::url(url('storage/uploads/products/product13.png'), 500, 500, ['crop' => true]) }}" alt="Vanish" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Mix Qutta</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="13">
            <img src="{{ Image::url(url('storage/uploads/products/product14.png'), 500, 500, ['crop' => true]) }}" alt="Veet" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Moong Husk</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="14">
            <img src="{{ Image::url(url('storage/uploads/products/product15.png'), 500, 500, ['crop' => true]) }}" alt="Woolite" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Mong & Masoor Qutta</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="15">
            <img src="{{ Image::url(url('storage/uploads/products/product16.png'), 500, 500, ['crop' => true]) }}" alt="Clearasil" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Mong Qutta</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="16">
            <img src="{{ Image::url(url('storage/uploads/products/product17.png'), 500, 500, ['crop' => true]) }}" alt="Finish" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Palm Kernel Cake</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="17">
            <img src="{{ Image::url(url('storage/uploads/products/product18.png'), 500, 500, ['crop' => true]) }}" alt="Gaviscon" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Sarso Chora</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="18">
            <img src="{{ Image::url(url('storage/uploads/products/product19.png'), 500, 500, ['crop' => true]) }}" alt="Nutramigen" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Toor Atti</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="19">
            <img src="{{ Image::url(url('storage/uploads/products/product20.png'), 500, 500, ['crop' => true]) }}" alt="Calgon" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Toor Husk</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="20">
            <img src="{{ Image::url(url('storage/uploads/products/product21.png'), 500, 500, ['crop' => true]) }}" alt="Calgon" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Urad Atti</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="21">
            <img src="{{ Image::url(url('storage/uploads/products/product22.png'), 500, 500, ['crop' => true]) }}" alt="Calgon" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Urad Husk</span>
        </a>
    </div>
    <div class="brands-carousel__item">
        <a href="#" title="" class="brands-carousel__link  js-open-brand-overlay" data-brand-index="22">
            <img src="{{ Image::url(url('storage/uploads/products/product23.png'), 500, 500, ['crop' => true]) }}" alt="Calgon" class="brands-carousel__image" />
            <span class="brands-carousel__link-text">Wheat Dalya</span>
        </a>
    </div>
</div>  --}}