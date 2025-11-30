// 鼠标移动时的拖尾效果
(function() {
    // 如果是手机/平板（触摸设备），不启用拖尾，否则会很卡且奇怪
    if (window.matchMedia("(pointer: coarse)").matches) {
        return;
    }

    document.addEventListener('mousemove', function(e) {
        // 1. 创建一个小圆点元素
        var dot = document.createElement('div');
        dot.className = 'cursor-trail';
        
        // 2. 设置圆点的位置（跟随鼠标）
        // 使用 pageX/Y 可以适应页面滚动
        dot.style.left = e.pageX + 'px';
        dot.style.top = e.pageY + 'px';
        
        // 3. 把圆点加到页面里
        document.body.appendChild(dot);
        
        // 4. 动画结束后（跟CSS里的0.5s对应），从页面删除这个元素
        // 这里设置 450ms 清除，比动画稍微早一点点，防止闪烁
        setTimeout(function() {
            dot.remove();
        }, 450);
    });
})();
