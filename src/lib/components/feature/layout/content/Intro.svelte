<script lang="ts">
    import image from '$lib/assets/image.png';
    import { CircleUserRound } from 'lucide-svelte';
</script>

<div class="py-16">
    <div class="flex flex-col items-start justify-center gap-8">
        <h1 class="flex items-center gap-2">
            <CircleUserRound color="var(--color-primary)" size={48} />
            <span class="text-primary">소개</span>
        </h1>
        <div class="flex items-center gap-12">
            <img src={image} alt="프로필 이미지" class="w-72 h-72 object-cover" />
            <div class="flex flex-col gap-5">
                <h1 class="text-dark-gray">안녕하세요,</h1>
                <div class="text-primary subtitle">프론트엔드 개발자</div>
                <div class="text-dark-gray subtitle">이진영 입니다.</div>
                <h2 class="text-dark-gray whitespace-pre-line leading-relaxed">
                    오래된 것에 대한 <span class="text-secondary">탐구</span>를,<br/>
                    새로운 것에 대한 <span class="text-secondary">도전</span>을 즐기며<br/>
                    맡은 바에 최선을 다하는 개발자입니다.<br/>
                    <span class="body">방문해주셔서 감사합니다.</span>
                </h2>
            </div>
            
        </div>
        
    </div>
</div>