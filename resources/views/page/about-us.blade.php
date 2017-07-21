@extends('layout')


@section('content')

    @component('component.page-header')

        @slot('title')
            About Us
        @endslot

        @slot('backLink')
            {{ url('/') }}
        @endslot

        @slot('backLinkText')
            Home
        @endslot

        @slot('imgUrl')
            @mobile
                {{ Image::url(url('storage/uploads/about-us-top.jpg'), 360, 470, ['crop' => true, 'grayscale' => true]) }}
            @elsemobile
                {{ Image::url(url('storage/uploads/about-us-top.jpg'), 1349, 749,['crop' => true, 'grayscale' => true]) }}
            @endmobile
        @endslot

    @endcomponent
    
    <div class="umb-grid">
        <div class="grid-section">
            <div>
                <div class="row clearfix clear-row">
                    <div class="col-md-12 column clear-column">
                        <div>
                            <div class="top-copy">

                                @component('component.copy')

                                    @slot('color')
                                        white
                                    @endslot

                                    @slot('title')
                                        Founder
                                    @endslot

                                    @slot('content')
                                        <p>
                                            <span>
                                                <strong>Haji Abdul Sattar Chapri</strong> founded and set the pillar of Chapri group as the trader of cotton oil seed cake in the early 80s. From that period of time, Chapri group has achieved many milestones in the agricultural commodities. His mission is to focus on the three core values which have been following till date by current President of the company Mr. Hanif Chapri and his team.
                                            </span>
                                        </p>
                                    @endslot

                                @endcomponent
                            </div>

                            @component('component.copy')

                                @slot('color')
                                    white
                                @endslot

                                @slot('title')
                                    Mission
                                @endslot

                                @slot('content')
                                    <h3>Quality</h3>
                                    <p>
                                        Every customer is unique so we should serve the best. His aim is to provide the superior quality in the best possible prices so everyone can get the best product they want.
                                    </p>
                                    <h3>Relationship</h3>
                                    <p>Our customers are like our family and we treat them accordingly. Give it a try and experience our out class after sale services because we believe in building long term relationship with our customers rather than just selling.</p>
                                    <h3>Trust</h3>
                                    <p>
                                        One of the strongest pillar of Chapri Group is trust. Over the period we have number of business associates who believe in us. Their trust gives us strength to deliver the best, manufactures the best and trade the best.
                                    </p>
                                    <br>
                                    <p>
                                        With the huge family of customers and trusting associates Chapri Group is now become a group of companies which is ISO certified. We are now a leading Feed Manufacturers, Commodity Trader, and a very well know in building and construction sector here in Pakistan.
                                    </p>
                                @endslot

                            @endcomponent
                            
                            @component('component.picture')
                                @slot('image')
                                    {{ Image::url(url('storage/uploads/about-us-manufacture.jpg'), 750, 352, ['crop' => true]) }}
                                @endslot
                                @slot('alt')
                                    We manufactures the best!
                                @endslot
                            @endcomponent

                            @component('component.quote')
                                @slot('type')
                                    gradient
                                @endslot
                                @slot('content')
                                    "We manufactures the best!"
                                @endslot
                            @endcomponent

                            @component('component.copy')

                                @slot('color')
                                    white
                                @endslot

                                @slot('content')
                                    <p>
                                        <span>
                                            Farooq Feed & Allied products, a name of quality and authenticity. We manufactures different top of the line cattle and poultry feeds. Farooq feed holds the title of the biggest feed manufactures here in Pakistan. Our quality and services says it all.
                                        </span>
                                    </p>
                                @endslot

                            @endcomponent

                            @component('component.picture')
                                @slot('image')
                                    {{ Image::url(url('storage/uploads/about-us-trade.jpg'), 750, 352, ['crop' => true]) }}
                                @endslot
                                @slot('alt')
                                    We manufactures the best!
                                @endslot
                            @endcomponent

                            @component('component.quote')
                                @slot('type')
                                    gradient
                                @endslot
                                @slot('content')
                                    "We trade the best!"
                                @endslot
                            @endcomponent

                            @component('component.copy')

                                @slot('color')
                                    white
                                @endslot

                                @slot('content')
                                    <p>
                                        <span>
                                            We are the biggest trader, trading in multiple commodities. We are the founder of introducing <strong>PALM KERNEL CAKE</strong>, and <strong>PALM KERNEL PALLETS</strong> in Pakistan. We are one of the biggest importers of <strong>PALM OIL CAKE</strong> in the world. We have the certification of the biggest importers from <strong>MPOB (Malaysian Palm Oil Board)</strong>. We trade on international level as well as domestic.
                                        </span>
                                    </p>
                                @endslot

                            @endcomponent

                            @component('component.copy')

                                @slot('color')
                                    white
                                @endslot

                                @slot('content')
                                    <p>
                                        <span>
                                            We are the biggest trader, trading in multiple commodities. We are the founder of introducing <strong>PALM KERNEL CAKE</strong>, and <strong>PALM KERNEL PALLETS</strong> in Pakistan. We are one of the biggest importers of <strong>PALM OIL CAKE</strong> in the world. We have the certification of the biggest importers from <strong>MPOB (Malaysian Palm Oil Board)</strong>. We trade on international level as well as domestic.
                                        </span>
                                    </p>
                                @endslot

                            @endcomponent

                            @component('component.copy')

                                @slot('color')
                                    white
                                @endslot

                                @slot('content')
                                    <p>
                                        <span>
                                            Our export section comprises of commodities such as wheat, rice, sugar, corn, pulses and feeding ingredients. We import different kind of pulses and the pulses husks around the globe.
                                        </span>
                                    </p>
                                @endslot

                            @endcomponent
                            
                            @component('component.picture')
                                @slot('image')
                                    {{ Image::url(url('storage/uploads/about-us-construct.jpg'), 750, 352, ['crop' => true]) }}
                                @endslot
                                @slot('alt')
                                    We manufactures the best!
                                @endslot
                            @endcomponent

                            @component('component.quote')
                                @slot('type')
                                    gradient
                                @endslot
                                @slot('content')
                                    "We construct the best!"
                                @endslot
                            @endcomponent

                            @component('component.copy')

                                @slot('color')
                                    white
                                @endslot

                                @slot('content')
                                    <p>
                                        <span>
                                            <strong>AHS BUILDERS</strong> a leading name in construct and building sector. AHS is one of the fastest growing and the most admired construction company in construction and building sector here in Pakistan. We have the expertise in executing large and complex constructions commercially and residentially. We are driven to deliver the projects “On time in the budgeted amount” using our expertise and the world class construction techniques along with uncompromising standards of Quality, Safety, and Durability.
                                        </span>
                                    </p>
                                @endslot

                            @endcomponent

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    @include('component.footer')

@endsection