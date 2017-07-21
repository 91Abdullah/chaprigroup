<div class="quote quote--{{ $type }}">
    <div class="wrapper quote__wrapper">
        <blockquote class="quote__blockquote">
            <p class="blockquote__copy">{{ $content }}</p>
            @if(isset($footer))
                <footer class="blockquote__footer">
                    {{ $footer }}
                </footer>
            @endif
        </blockquote>
    </div>
</div>