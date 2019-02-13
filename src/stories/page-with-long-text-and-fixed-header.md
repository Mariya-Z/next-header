##Page with long text and fixed header

### Template for this example looks like code below

```
<style>
    .head {
        position: fixed;
        top: 0;
        width: 100%
    }
    .content {
        margin-top: 36px
    }
</style>
<div>
    <next-header class="head"
        env="dev" role="NEXT" descr="BioSample"
        (refClicked)="onPress($event)"
        (helpSlot)="helpSlot($event)"
        (userName)="userName($event)"
        (logout)="logout($event)">
        <span helpSlot (click)="helpSlotClicked()" class="item">
        <i class="fa fa-th"></i>
        </span>
        <span helpSlot (click)="helpSlotClicked()" class="item">
        <i class="fa fa-bell"></i>
        </span>
        <span helpSlot (click)="helpSlotClicked()" class="item">
            <i class="fa fa-question"></i>
        </span>
        <span userName (click)="userNameClicked()" class="item">Mariia Zubkova</span>
        <span logout (click)="logoutClicked()" class="item">
        <i class="fa fa-sign-out"></i>
        </span>
    </next-header>
    <div class="content">some long text</div>
</div>
```