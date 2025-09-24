<script lang="ts">
    import image from '$lib/assets/image.png';
</script>

<div class="h-screen py-64">
    <div class="flex flex-col items-center justify-center gap-8">
        <div class="flex items-center gap-8">
            <img src={image} alt="프로필 이미지" class="w-48 h-48 rounded-full object-cover" />
            <div class="flex flex-col gap-2">
                <h1 class="text-3xl font-bold">안녕하세요,</h1>
                <div class="flex items-center gap-2">
                    <h1 class="text-3xl font-bold text-primary">프론트엔드 개발자</h1>
                    <h1 class="text-3xl font-bold">이진영 입니다.</h1>
                </div>
            </div>
        </div>
        <p class="text-lg text-gray-600 text-center">
            오래된 것에 대한 <span class="text-secondary">탐구를</span>,<br/>
            새로운 것에 대한 <span class="text-secondary">도전을</span> 즐기며<br/>
            많은 변에 최선을 다하는 개발자입니다.<br/>
            반문해주셔서 감사합니다.
        </p>
    </div>
</div>