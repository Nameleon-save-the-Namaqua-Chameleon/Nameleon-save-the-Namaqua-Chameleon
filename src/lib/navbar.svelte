<script>
    /**
     * Hint: - you would want to type annotate this as an Array
     *       - but i can not get it working without ts errors
	 * @type {any}
	 */
     export let nav_elements;

    /**
	 * @type {string}
	 */
     export let current;
    
    /**
	 * @type {boolean}
	 */
     export let verticality;
</script>

{#if verticality}
    <div class="z-40 bg-primary-900 grow w-full overflow-hidden bg-opacity-60">
        <ul>
        <div class="grow-0 float-left">
            {#each nav_elements as el}
                <li class="float-left {current === el['label'] ? "bg-secondary-500" : "bg-primary-900 bg-transparent "}">
                    <a class="grow flex" href="{el['path']}">
                        
                        <div class="m-3">
                            {el['label']}
                        </div>
                    </a>
                </li>
            {/each}
        </div>
        </ul>
    </div>    
{:else}
    <div class="z-40 bg-primary-600 grow overflow-hidden">
        <ul>
        <div class="grow">
            {#each nav_elements as el}
                <li class="grow flex items-center {current === el['label'] ? "bg-secondary-500" : "bg-transparent"}">
                    <a class="grow flex" href="{el['path']}">
                        
                        <div class="m-3 ml-7">
                            {el['label']}
                        </div>
                    </a>
                </li>
            {/each}
        </div>
        </ul>
    </div>    
{/if}
