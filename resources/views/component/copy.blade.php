<div class="copy copy--{{ $color }}">
    <div class="wrapper">
        @if(isset($title))
            <h2 class="copy__title">
                {{ $title }}
            </h2>
        @endif
        <div class="copy__content">
            <p>
            <span>
                {{ $content }}
            </span>
            </p>
        </div>
    </div>
</div>