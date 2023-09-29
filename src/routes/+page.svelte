<script>
    //@ts-ignore
	import Carousel from "svelte-carousel";
    import { browser } from "$app/environment";
	import { AppShell } from "@skeletonlabs/skeleton";

    let carousel; // for calling methods of the carousel instance
</script>


<!-- Check pictures for filesize! -->


<!-- Image Links:

    Chameleon images:

    https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F6f%2FNamaqua_Chameleon_%2528212233455%2529.jpeg&tbnid=8u8N25B82261JM&vet=12ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygEegUIARCqAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANamaqua_Chameleon_(212233455).jpeg&docid=UOi59xT8vklCqM&w=1350&h=900&itg=1&q=namaqua%20chameleon&hl=en-US&ved=2ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygEegUIARCqAQ
    https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F80%2FNamaqua_Cameleon.JPG&tbnid=Tya6cJ7ss7fZDM&vet=12ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygFegUIARCtAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANamaqua_Cameleon.JPG&docid=gPP4uDAv0i6bSM&w=1500&h=1000&itg=1&q=namaqua%20chameleon&hl=en-US&ved=2ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygFegUIARCtAQ
    https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fd8%2FLaika_ac_Namaqua_Chameleon_%25288446604184%2529.jpg&tbnid=KTXkVChsmRl9FM&vet=12ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygGegUIARCwAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ALaika_ac_Namaqua_Chameleon_(8446604184).jpg&docid=x19_Pbjs_XX8-M&w=5184&h=3456&itg=1&q=namaqua%20chameleon&hl=en-US&ved=2ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygGegUIARCwAQ
    https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F34%2FNamaqua_Cameleon_3.JPG&tbnid=RzUXZKTYUzKmuM&vet=12ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygCegUIARCkAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANamaqua_Cameleon_3.JPG&docid=u4TEGY9Xqs9bBM&w=1500&h=1000&itg=1&q=namaqua%20chameleon&hl=en-US&ved=2ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygCegUIARCkAQ
    https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8b%2FChamaeleo_namaquensis_%2528Walvis_Bay%2529.jpg&tbnid=vBuYuPYLgJRTPM&vet=12ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygAegUIARCeAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AChamaeleo_namaquensis_(Walvis_Bay).jpg&docid=PDEdGz4hkuqM4M&w=3600&h=2400&q=namaqua%20chameleon&hl=en-US&ved=2ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygAegUIARCeAQ
    https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANamaqua-Cham%25C3%25A4leon-Spitzkoppe.jpg&psig=AOvVaw1TFQGqF4i3qFItwfs--ZJV&ust=1690985521117000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiotNyL0ruAAxVLQPEDHXkWCDIQjRx6BAgAEAw
    https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa3%2FChamaeleo_namaquensis_%2528Namib-Naukluft%252C_2011%2529.jpg&tbnid=QE_1nKKmi2ydGM&vet=12ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygKegUIARC8AQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AChamaeleo_namaquensis_(Namib-Naukluft%2C_2011).jpg&docid=0ME9TcTI5BfMUM&w=4000&h=2666&q=namaqua%20chameleon&hl=en-US&ved=2ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygKegUIARC8AQ
    https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F78%2FNamaqua_Dwarf_Chameleon.jpg&tbnid=OX0U5SgbuT29vM&vet=12ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygDegUIARCnAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANamaqua_Dwarf_Chameleon.jpg&docid=_0ybtz9nYGs69M&w=3888&h=2592&itg=1&q=namaqua%20chameleon&hl=en-US&ved=2ahUKEwj4nfqD0ruAAxW3xgIHHUPWBZMQMygDegUIARCnAQ

    Vector Icons:

    https://www.svgrepo.com/svg/159174/objective
    https://www.svgrepo.com/svg/122646/leadership
    https://www.svgrepo.com/svg/307253/creativity-visualize-visual-imagine
    https://www.svgrepo.com/svg/307101/science-think
    https://www.svgrepo.com/svg/307221/burden-depression-responsibility-difficulty
    https://www.svgrepo.com/svg/307728/collaboration-picture-visualize-person
    https://www.svgrepo.com/svg/220904/bank
    https://www.svgrepo.com/svg/298509/background
    https://www.svgrepo.com/svg/520690/diamond
    https://www.svgrepo.com/svg/224155/vision
    https://www.svgrepo.com/svg/488688/space-shuttle

-->

    {#if browser}
    <div class="relative w-full grow flex">
        <div class="absolute z-30 grow flex justify-center w-full pt-4 pointer-events-none">
            <h1 class="max-sm:text-5xl max-lg:text-7xl lg:text-8xl">NAMELEON</h1>
        </div>
        <Carousel
            bind:this={carousel}
            arrows={false}
            autoplay={true}
            duration=300
            autoplayDuration=5000
            dots={false}
        >

            <div class="flex items-center grow w-full justify-center max-h-[40rem]" >
                <img
                class="absolute object-contain h-4/5 w-4/5 z-10 pointer-events-none"
                src="static/images/nameleon_1.webp"
                alt="..." />
                <img
                class="object-fill w-full grow z-0 blur pointer-events-none"
                src="static/images/nameleon_1.webp"
                alt="..." />
            </div>
            <div class="flex items-center grow w-full justify-center max-h-[40rem]">
                <img
                class="absolute object-contain h-4/5 w-4/5 z-10 pointer-events-none"
                src="static/images/nameleon_2.webp"
                alt="..." />
                <img
                class="object-cover w-full grow z-0 blur pointer-events-none"
                src="static/images/nameleon_2.webp"
                alt="..." />
            </div>
            <div class="flex items-center grow w-full justify-center max-h-[40rem]">
                <img
                class="absolute object-contain h-4/5 w-4/5 z-10 pointer-events-none"
                src="static/images/nameleon_3.webp"
                alt="..." />
                <img
                class="object-fill w-full grow z-0 blur pointer-events-none"
                src="static/images/nameleon_3.webp"
                alt="..." />
            </div>
            <div class="flex items-center grow w-full justify-center max-h-[40rem]">
                <img
                class="absolute object-contain h-4/5 w-4/5 z-10 pointer-events-none"
                src="static/images/nameleon_4.webp"
                alt="..." />
                <img
                class="object-fill w-full grow z-0 blur pointer-events-none"
                src="static/images/nameleon_4.webp"
                alt="..." />
            </div>
            <div class="flex items-center grow w-full justify-center max-h-[40rem]">
                <img
                class="absolute object-contain h-4/5 w-4/5 z-10 pointer-events-none"
                src="static/images/nameleon_5.webp"
                alt="..." />
                <img
                class="object-fill w-full grow z-0 blur pointer-events-none"
                src="static/images/nameleon_5.webp"
                alt="..." />
            </div>
            <div class="flex items-center grow w-full justify-center max-h-[40rem]">
                <img
                class="absolute object-contain h-4/5 w-4/5 z-10 pointer-events-none"
                src="static/images/nameleon_6.webp"
                alt="..." />
                <img
                class="object-fill w-full grow z-0 blur pointer-events-none"
                src="static/images/nameleon_6.webp"
                alt="..." />
            </div>
            <div class="flex items-center grow w-full justify-center max-h-[40rem]">
                <img
                class="absolute object-contain h-4/5 w-4/5 z-10 pointer-events-none"
                src="static/images/nameleon_7.webp"
                alt="..." />
                <img
                class="object-fill w-full grow z-0 blur pointer-events-none"
                src="static/images/nameleon_7.webp"
                alt="..." />
            </div>
        </Carousel>
    </div>
    {/if}

    <div class="grow flex w-full whitespace-nowrap justify-center py-2 bg-primary-900/80">
        <h1 class="text-secondary-400 sm:text-4xl max-sm:text-xl xl:text-5xl">&#8222; Nameleon Wildlife Foundation Namibia &#8221;</h1>
    </div>

    <!-- <div class="sm:pl-[25%] sm:pr-[30%] max-sm:pr-[5%] max-sm:pl-[5%] mt-12 w-fulll"> -->
    <div class="content-div">


        <div class="flex">
            <h1 class="content-heading">Background of the organisation</h1>
            <img src="static/images/background-svgrepo-com.svg" alt="..." width="40px">
        </div>

        <blockquote class="content-blockquote">
            Nameleon is an environmental non-profit organization dedicated to the preservation and
            protection of the unique and fragile ecosystem of the Namib Desert in Namibia. We were
            founded with the mission to address the urgent issue of the declining population of Namaqua
            chameleons, a vital species within this desert biome.
            <br><br>
            The Namaqua chameleons play a crucial role in controlling the population of tenebroid
            beetles, a species whose proliferation could have detrimental effects on the delicate balance
            of the desert ecosystem. Recognizing the significance of these chameleons and the potential
            ecological consequences if they were to disappear, we have initiated efforts to raise
            awareness among road users in areas such as the roads to Sesriem out of Walvis Bay and the
            Boshua Pass exit out of Swakop towards Langer Heinrich mine.
            <br><br>
            Our founder, Mr. Marlon Schultz, is a nature conservationist with extensive experience as a
            tour guide in the Namib, has witnessed firsthand the importance of preserving the Namib
            Desert and its diverse fauna and flora. With Namibia already experiencing a climate crisis,
            we recognize the vulnerability of the micro fauna and flora in this region, making their
            preservation a critical concern.
            <br><br>
            In addition to our initial focus on chameleon conservation, our long-term vision encompasses
            monitoring the movement and well-being of key fauna and flora species in the Namib Desert.
            By closely observing their behavior and habitats, we aim to gain valuable insights into the
            impacts of climate change and other environmental factors on this fragile ecosystem.
            <br><br>
            Education and awareness play pivotal roles in our organization's approach. We believe that
            the youth are our future stewards of the environment. Through educative tourism and
            outreach programs, we strive to empower and educate young people about the importance of
            conservation and sustainable practices. By instilling a sense of responsibility and respect for
            the sensitive desert ecology, we aim to cultivate a generation of environmental advocates who
            will champion the preservation of the Namib Desert for years to come.
            <br><br>
            At Nameleon, we are driven by our passion for nature, our commitment to preserving the
            Namib Desert, and our belief in the power of education. By working collaboratively with
            local communities, government agencies, and other stakeholders, we aspire to create a
            sustainable future where the unique biodiversity and ecological balance of the Namib Desert
            can thrive, ensuring its preservation for generations ahead.
        </blockquote>
    </div>
