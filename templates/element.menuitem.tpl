{$level = $level|default:0}
{foreach $menu->getItems() as $menuitem}
<li class="{$menuitem->Css} {if $menuitem->IsActive}active{/if}">
    <a href="{$menuitem->Url}">{$menuitem->Title}</a>
    {if $menuitem->getItems()|@count > 0}		
    <ul>
    {include file="element.menuitem.tpl" menu=$menuitem level=$level+1}
    </ul>
    {/if}
</li>
{/foreach}