@extends('layout')


@section('content')

    @component('component.page-header')

        @slot('title')
            Divisions
        @endslot

        @slot('backLink')
            {{ url('/') }}
        @endslot

        @slot('backLinkText')
            Home
        @endslot

        @slot('imgUrl')
            @mobile
                {{ Image::url(url('storage/uploads/brands_landing.jpg'), 360, 470, ['crop' => true]) }}
            @elsemobile
                {{ Image::url(url('storage/uploads/brands_landing.jpg'), 1349, 749,['crop' => true]) }}
            @endmobile
        @endslot

    @endcomponent

    @component('component.umb-grid')
        @slot('content')
            <div class="top-copy">

                @component('component.copy')

                    @slot('color')
                        white
                    @endslot

                    @slot('title')
                        Divisions
                    @endslot

                    @slot('content')
                        <p>
                            We believe there's a better way to do business – we like to call it 'Best'. Socially, environmentally and financially, we act responsibly and sustainably. We believe passionately in doing things the right way, and we believe the better way helps us deliver high quality products in the following sector that touch our consumer’s heart. It’s being able to lead a fitter and happier life. Our responsibility is to help people achieve their goals of business while creating the life easy of our consumers, while making the right kind of social and environmental impact. That’s what we call “best”.
                        </p>
                        <p>
                            Life is changing, getting faster and more demanding. We provide solutions that help our customers to deal with these new challenges. This is why we’re one of the fastest growing group in one of the fastest growing markets – we drive innovation, creativity and durability to max that is how we do it.
                            In fact, we've redefined the solutions for the problems by combining our in-depth business knowledge with the speed of decision making so we get the best ideas developed rapidly. This is why our companies are market leaders in the following sectors. 
                        </p>
                    @endslot

                @endcomponent

                @component('component.brands')
                    @slot('content')
                        @foreach($brands as $brand)
                            @component('component.brand')
                                @slot('imgLink')
                                    {{ route($brand->route) }}
                                @endslot
                                @slot('imgUrl')
                                    {{ Image::url(url('storage/uploads/' . $brand->imgUrl), 442, 442, ['crop' => true]) }}
                                @endslot
                                @slot('division_name')
                                    {{ $brand->name }}
                                @endslot
                            @endcomponent
                        @endforeach
                    @endslot
                @endcomponent

            </div>
        @endslot
    @endcomponent

    @include('component.footer')

@endsection