<script lang="ts">
    import { BookA } from 'lucide-svelte';
</script>

<div class="py-16">
    <div class="flex flex-col items-start justify-center gap-8">
        <h1 class="flex items-center gap-2">
            <BookA color="var(--color-primary)" size={48} />
            <span class="text-primary">소개</span>
        </h1>
        <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-4">
                <h2 class="text-dark-gray">🎓 학력</h2>
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2">
                        <h4 class="text-dark-gray">아주대학교 전자공학과</h4>
                        <span class="text-dark-gray caption">2017.03.02 - 2025.02.21</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <h4 class="text-dark-gray">중원고등학교</h4>
                        <span class="text-dark-gray caption">2014.03.03 - 2017.02.07</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <h2 class="text-dark-gray">📚 활동</h2>
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2">
                        <h4 class="text-dark-gray">심화_엔드 투 엔드 AI 통합 풀스택 개발 전문가 과정</h4>
                        <span class="text-dark-gray caption">주식회사구름</span>
                        <span class="text-dark-gray caption">2025.04.23 ~ 2025.06.27</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <h4 class="text-dark-gray">카카오(kakao) 클라우드 스쿨 개발자 양성 과정</h4>
                        <span class="text-dark-gray caption">한국전파진흥협회</span>
                        <span class="text-dark-gray caption">2023.12.06 ~ 2024.06.11</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <h4 class="text-dark-gray">아주대학교 IT동아리 Do-IT</h4>
                        <span class="text-dark-gray caption">아주대학교</span>
                        <span class="text-dark-gray caption">2023.03.18 ~ 2023.05.24</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <h4 class="text-dark-gray">아주대학교 교육봉사동아리 샘터야학</h4>
                        <span class="text-dark-gray caption">아주대학교</span>
                        <span class="text-dark-gray caption">2022.11.22 ~ 2023.06.09</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <h2 class="text-dark-gray">🗣️ 어학</h2>
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2">
                        <h4 class="text-dark-gray">TOEIC 750</h4>
                        <span class="text-dark-gray caption">2025.09.14</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <h4 class="text-dark-gray">OPIc IM1</h4>
                        <span class="text-dark-gray caption">2025.03.12</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <h4 class="text-dark-gray">JLPT N1</h4>
                        <span class="text-dark-gray caption">2025.01.10</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <h2 class="text-dark-gray">🪪 자격증</h2>
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2">
                        <h4 class="text-dark-gray">PCCP Lv.3 JavaScript</h4>
                        <span class="text-dark-gray caption">2024.9.20</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <h4 class="text-dark-gray">정보처리기사</h4>
                        <span class="text-dark-gray caption">2024.6.18</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <h4 class="text-dark-gray">SQL개발자(SQLD자격)</h4>
                        <span class="text-dark-gray caption">2024.4.5</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>