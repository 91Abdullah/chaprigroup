@extends('layout')


@section('content')

    @component('component.page-header')

        @slot('title')
            Products & Brands
        @endslot

        @slot('backLink')
            {{ route('brands') }}
        @endslot

        @slot('backLinkText')
            Home
        @endslot

        @slot('imgUrl')
            @mobile
                {{ Image::url(url('storage/uploads/about-us-construct.jpg'), 360, 470, ['crop' => true]) }}
            @elsemobile
                {{ Image::url(url('storage/uploads/about-us-construct.jpg'), 1349, 749,['crop' => true]) }}
            @endmobile
        @endslot

    @endcomponent

    @foreach($products as $key => $product)

        @component('component.quote')
            @slot('type')
                gradient
            @endslot
            @slot('content')
                {{ $product->title }}
            @endslot
        @endcomponent

        @component('component.copy')

            @slot('color')
                gray
            @endslot

            @slot('content')
                {!! $product->text !!}
            @endslot

        @endcomponent

        @component('component.simple-picture')
            @slot('image')
                {{ Image::url(url('storage/uploads/' . $product->image), 500, 500, ['crop' => true]) }}
            @endslot
            @slot('alt')
                {{ $product->title }}
            @endslot
        @endcomponent

    @endforeach

    @include('component.footer')

@endsection