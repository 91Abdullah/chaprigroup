@extends('layout')

@section('content')

    <div class="home-wrapper">
        {{--  @component('component.header')

            @slot('title')
                Healthier lives, happier homes
            @endslot

            @slot('imgUrl')
                @mobile
                    {{ Image::url(url('storage/uploads/home-header.jpg'), 360, 470, ['crop']) }}
                @elsemobile
                    {{ Image::url(url('storage/uploads/home-header.jpg')) }}
                @endmobile
            @endslot

        @endcomponent  --}}

        @include('component.slick-header')

        <div class="rotate__modules-wrapper">

            @foreach($rotateModules as $key => $module)

                @if($module->name == 'about_us')

                    @component('module.simple')

                        @slot('image')
                            @if(!is_null($module->image))
                                @mobile
                                    {{ Image::url(url($module->image), 360, 940, ['crop']) }}
                                @elsemobile
                                    {{ Image::url(url($module->image), 1440, 1000, ['crop']) }}
                                @endmobile
                            @else
                                {{ $module->image }}
                            @endif
                        @endslot

                        @slot('class')
                            {{ $module->class }}
                        @endslot

                        @slot('z_index') 

                            {{ count($rotateModules) - $key }}

                        @endslot

                        @slot('color')

                            {{ $module->color }}

                        @endslot

                        @slot('text_button')

                            {{ $module->text_button }}

                        @endslot

                        @slot('intro_copy')

                            {!! $module->intro_copy !!}

                        @endslot

                        @slot('title')

                            {{ $module->title }}

                        @endslot

                        @slot('extra_content')
                            {{ null }}

                        @endslot    

                        @slot('link')
                            {{ $module->link }}
                        @endslot

                        @slot('text_link')

                            {{ $module->text_link }}

                        @endslot

                    @endcomponent

                @else
                
                    @component('module.rotate')

                        @slot('image')
                            @if(!is_null($module->image))
                                @mobile
                                    {{ Image::url(url($module->image), 360, 940, ['crop']) }}
                                @elsemobile
                                    {{ Image::url(url($module->image), 1440, 1000, ['crop']) }}
                                @endmobile
                            @else
                                {{ $module->image }}
                            @endif
                        @endslot

                        @slot('class')
                            {{ $module->class }}
                        @endslot

                        @slot('z_index') 

                            {{ count($rotateModules) - $key }}

                        @endslot

                        @slot('color')

                            {{ $module->color }}

                        @endslot

                        @slot('text_button')

                            {{ $module->text_button }}

                        @endslot

                        @slot('intro_copy')

                            {!! $module->intro_copy !!}

                        @endslot

                        @slot('title')

                            {{ $module->title }}

                        @endslot

                        @slot('extra_content')
                            @if($module->name == 'product_and_brands')
                                <div class="js-brands-carousel brands-carousel">

                                    @foreach($products as $key => $product)

                                        @component('component.product')
                                    
                                            @slot('title')
                                                {{ $product->title }}
                                            @endslot

                                            @slot('image')
                                                {{ $product->image }}
                                            @endslot

                                            @slot('index')
                                                {{ (int)$product->id - 1 }}
                                            @endslot

                                        @endcomponent   

                                    @endforeach

                                </div>
                            @else
                                {{ null }}    
                            @endif

                        @endslot    

                        @slot('link')
                            {{ $module->link }}
                        @endslot

                        @slot('text_link')

                            {{ $module->text_link }}

                        @endslot

                    @endcomponent

                @endif

            @endforeach
            
            
        </div>
        

        @include('component.footer')

    </div>

@endsection

@section('scripts') 
    <script>
        $(document).ready(function(){
            /*var owl = $("#slider-carousel");
            owl.owlCarousel({
                items: 1,
                autoplay: true,
                loop: true,
                nav: false,
                dots: false,
                autoplayTimeout: 10000,
                autoplayHoverPause: true
            });*/
            $('.slick-carousel').slick({
                autoplay: true,
                autoplaySpeed: 6000,
                arrows: true,
                infinite: true,
                pauseOnHover: true,
                prevArrow: '<button class="brands-carousel__arrow brands-carousel__arrow--prev"><svg width="30" height="30" ><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-left"></use></svg></button>',
                nextArrow: '<button class="brands-carousel__arrow brands-carousel__arrow--next"><svg width="30" height="30" ><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right"></use></svg></button>',
            });
        });
    </script>
@endsection 

@section('overlay-scripts')
    <script>
    var overlayData = 
        [
            {"Title":"Chana Atti","Text":"<p>This Product is 100% imported. Channa Atti is an excellent source of magnesium, phosphorus, calcium and potassium. Besides, it contains fewer amounts of copper, zinc and magnesium.  It provides an adequate amount of iron and selenium. The powdered shape pods hold a substantial place among pulses. It’s in white, brown white hylum. Few well-known advantages of Channa Atti are listed below:</p><p>Channa Atti possess low amount of calories, and saturated fats which makes it healthy. The presence of dietary fiber keeps full for a long period of time, increase metabolism rate in cattle and reduces the possibilities of unnecessary weight gain. The nutrients found in Channa Atti converts into the usable energy than to store as a fat in the milking buffaloes.</p>","Image":"{{ url('storage/uploads/products/product1.png') }}","LinkName":"Chana Atti","Link":""},

            {"Title":"Chana Chilka","Text":"<p>Best Channa Chilka is 100% imported.  To ensure the quality channa chilka is imported from the international factories that are highly instrumental in latest machines in providing an extensive array of Chana Chilka. Our skilled professionals along with the strict SOPs of quality make sure the bestest quality.</p>","Image":"{{ url('storage/uploads/products/product2.png') }}","LinkName":"Chana Chilka","Link":""},

            {"Title":"Dates Chora","Text":"<p>This product is free of all chemicals. Date Chora (Khajoor Chora) is made by Farooq Feed in their manufacturing unit to ensure the quality. Dates are the most popular diet for milking buffaloes so Faqoor Feed makes it easy for the farmers by cutting it down into small pieces for the perfect blending and to be consumed by cattle easily.</p>","Image":"{{ url('storage/uploads/products/product4.png') }}","LinkName":"Dates Chora","Link":""},

            {"Title":"Makai Dalya","Text":"<p>This Makia Dalya (Corn porridge) is 100% Quality Tested, Packed with High End Machines for Quality Preservation. This makai dalya is made by Farooq feed manufacturing unit to ensure the superiority of quality. </p><p>Organic corn has reasonably high levels of:</p><ul><li>Vitamin B6</li><li>•	Selenium</li><li>Magnesium</li><li>Manganese</li><li>Potassium</li><li>Zinc</li><li>Iron</li></ul><p>This product also contains small amounts of calcium, vitamin A, and foliate. All these elements are essential parts of a healthy, well-balanced diet for your cattle.</p>","Image":"{{ url('storage/uploads/products/product6.png') }}","LinkName":"Makai Dalya","Link":""},

            {"Title":"Milk Booster Feed","Text":"\u003cp\u003eMilk Booster Feed is used widely for increasing milking capability of cattle. It can be treated as Cattle Feed. These are used extensively for the following benefits:\u003c/p\u003e<ol><li>Increase in Milk Production</li><li>Increase Diseases resistance power of cattle.</li><li>Shows good result in Health impact.</li></ol><h1>Ingredients</h1><p>Totally herbal, carbohydrates, Fats, Proteins, Fiber, Calories, tannins, Phosphorus, Calcium, Glucose, Sucrose, Glycosides.</p><p>Milk Booster has endowed in Pakistan with the largest number of milk cattle. However milk production per head is abysmally merged. It is true that the milk production is limited by genetics. But it can be increase considerably with effective management of nutrition and water along with our Milk Booster Feed</p>","Image":"{{ url('storage/uploads/products/product10.png') }}","LinkName":"Milk Booster Feed","Link":""},

            {"Title":"Milkona Mix Atti","Text":"<p>Milkona Mix atti is the name of quality for enhancing milk production. It is product in the manufacturing plant of chapri group. It is carefully checked and it has to be gone through a strict quality check before entering to the market. </p><p>Its Secret blending is perfect for enhancing the milk production. It’s fulfill the gaps and lacks in the daily feed of the cattle. It’s one of the most popular product  in the chapri group umbrella due to its efficacy. </p>","Image":"{{ url('storage/uploads/products/product11.png') }}","LinkName":"Milkona Mix Atti","Link":""},
           
            {"Title":"Mix Qutta","Text":"Best Mix Qutta is manufactured internationally by blending different pulses qutta. Such as Mong, Masoor, Toor, and urad qutta. This Product is 100% imported and made as per the needs of nutrition requirements that should be present in the daily cattle feed.","Image":"{{ url('storage/uploads/products/product13.png') }}","LinkName":"Mix Qutta","Link":""},

            {"Title":"Mong & Masoor Qutta","Text":"<p>Mong & Masoor Qutta is the perfect blending of two of the most popular pulses, when it come to the health benefits when blending this qutta into the usual daily feed of cattle. These two amazing pulses qutta give a perfect combination to fulfill the dietary needs of the cattle as well as the expectation of the farmers in the quality of Milk. The Blending of these Qutta is supervised by highly professional and it is done internationally. This Product is 100% imported.</p>","Image":"{{ url('storage/uploads/products/product15.png') }}","LinkName":"Mong & Masoor Qutta","Link":""},

            {"Title":"Mong Qutta","Text":"<p>Mong Atti is best in nutrition and when it's mixed with the meal of cattle it make the meal complete in fiber and makes the cattle swiftly produce more milk than the other ingredient. Best Mong Atti under the umbrella of chapri group goes through a quick quality check by our experienced staff to make it more effective. That is why Best Mong Atti is farmer's number one priority because of its best quality. Our Mong Atti is best in grain which higher its nutrition fractions. This Product is 100% imported. </p>","Image":"{{ url('storage/uploads/products/product16.png') }}","LinkName":"Mong Qutta","Link":""},

            {"Title":"Palm Kernel Cake","Text":"<p>This product is 100% imported. We are the first one to import & Introduce Palm Kernel Cake in Pakistan Cattle feed industry. We are the largest Importer of Palm Kernel Cake from 2006 - 2017. Pioneer in Importing of Palm Kernel when it comes to the quality. Imported from Palm from Malaysia and we are also the authorized members of Malaysian Palm Oil Board (MPOB). Palm Kernel Expeller is one of the top product of Farooq Feed. Farooq Feed is the only feed mill in Pakistan who chartered its own Vessel of Palm Kernel Cake.</p>","Image":"{{ url('storage/uploads/products/product17.png') }}","LinkName":"Palm Kernel Cake","Link":""},

            {"Title":"Sarso Chora","Text":"<p>The Sarso Chora is obtained from the extraction of mustard seed. It contains oil. This is used as a major ingredient of cattle feed in the country. It is perfect for animal and cattle feed, these have rich mineral content. Customers can purchase this Sarso Chora at most competitive price.</p><p>We are specialized in offering high quality Sarso Chora in the national as well as international market. The Sarso Chora catered and manufactured by us is of high quality and standard. We process them at the hygienic condition under the supervision of the experienced staffs. They are used in a number of domestic applications and as cattle feed. In addition to this, we are identified as one of the major Manufacturers in Karachi, Pakistan.</p>","Image":"{{ url('storage/uploads/products/product18.png') }}","LinkName":"Sarso Chora","Link":""},

            {"Title":"Toor Atti","Text":"<p>This Product is 100% imported. Toor Atti is an excellent source of magnesium, phosphorus, calcium and potassium. Besides, it contains fewer amounts of copper, zinc and magnesium.  It provides an adequate amount of iron and selenium. The flattened shape pods hold a substantial place among pulses. It is cutted round or oval pieces of Toor Daal in white, brown, red, greyish or purplish with a white hylum powder. Few well-known advantages of Pigeon Peas are listed below:</p><p>Pigeon peas possess low amount of calories, and saturated fats which makes it healthy. The presence of dietary fiber keeps full for a long period of time, increase metabolism rate in cattle and reduces the possibilities of unnecessary weight gain. The nutrients found in Toor Atti converts into the usable energy than to store as a fat.</p>","Image":"{{ url('storage/uploads/products/product19.png') }}","LinkName":"Toor Atti","Link":""},

            {"Title":"Urad Atti","Text":"<p>Urad atti, also known as black matpe with husk split or split black gram is a lentil that has been split with outer black skin intact. Split black gram with visible creamy white interiors is easier to mix into the feed in comparison other ingredient of feed. This nutritious black urad atti is high in proteins and gets a great result once it is mixed with different ingredients into the cattle feed in making the cattle healthy and productive. This Product is 100% imported.</p></p>Urad Atti is a nutritious that is rich in protein, dietary fiber and carbohydrates. Around 25% of its weight includes various proteins. urad dal atti offers, dietary fibers, Potassium  and fat. It is rich in vitamins like A, B1, B3 and C, and also contains moderate amounts of B complex vitamins like thiamine, riboflavin and niacin. It is also a good source of several minerals like calcium, potassium, magnesium, phosphorus, and iron.</p>","Image":"{{ url('storage/uploads/products/product21.png') }}","LinkName":"Urad Atti","Link":""},

            {"Title":"Wheat Dalya","Text":"<p>Broken wheat or cracked wheat or couscous is made by milling whole raw wheat grains coarsely. Wheat is cleaned and husked and then processed to the required size. It is highly nutritious as it does not undergo refining. Such cracked wheat has a large number of uses, especially as a dietary supplement. </p><p>The nutrient content of wheat compared to other feed grains is shown in Table 1.  Wheat has more protein, less fibre and a higher TDN value than barley and oats.  It is comparable to corn in terms of energy but has a significantly higher protein content and a more rapid rate of starch digestion.  The protein content of wheat is more variable than other feed grains because of the many classes of wheat grown.  In general, HRSW has the highest protein content with HRWW and durum having a slightly lower protein.</p><p>Table 1. Nutrient content of various feed grains </p><table><tr><th>DM Basis</th><th>Oats</th><th>Barley</th><th>HRS Wheat</th><th>Corn</th></tr><tr><td>%CP</td><td>13.6</td><td>13.2</td><td>17.2</td><td>9.8</td></tr><tr><td>%Fat</td><td>5.2</td><td>2.2</td><td>2.3</td><td>4.1</td></tr><tr><td>%ADF</td><td>14.0</td><td>5.8</td><td>4.2</td><td>3.3</td></tr><tr><td>%TDN</td><td>76</td><td>83</td><td>88</td><td>90</td></tr></table>","Image":"{{ url('storage/uploads/products/product23.png') }}","LinkName":"Wheat Dalya","Link":""},
        ];
    </script>

    <script type="text/template" class="js-brand-overlay">
        <section class="overlay">

            <a href="#" title="Close" class="overlay__close js-overlay-close">
                <svg class="overlay__close-image" width="50" height="50">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-corner-close"></use>
                </svg>
            </a>

            <div class="overlay-carousel js-overlay-carousel">

                <div class="overlay-carousel__item">

                    <div class="overlay-carousel__item-wrapper">

                        <h1 class="overlay__title overlay-carousel__item-title"></h1>

                        <div class="overlay__content">

                            <div class="overlay-carousel__item-content copy__content"></div>

                            <p>
                                {{--  <a href="#" title="" class="overlay-carousel__item-link overlay-carousel__item-button button" tabindex="0"></a>  --}}
                            </p>

                            <picture class="overlay-carousel__item-image overlay-carousel__picture">
                                <img src="@{{ImageUrl}}?anchor=center&mode=max&width=465&height=453" alt="" class="overlay-carousel__image" />
                            </picture>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    </script>
@endsection