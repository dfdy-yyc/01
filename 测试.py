#写一个python脚本在访问指定网址如'http://www.bilibili.com/video/'时，自动运行代码去修改html的内容，比如在<ul class="bpx-player-ctrl-playbackrate-menu">中添加一个新的<li class="bpx-player-ctrl-playbackrate-menu-item" data-value="0.25">0.25x</li>，使得在bilibili的html页面中可以选择0.25倍速播放。
import bpx
import player
from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options
import requests

if __name__ == '__main__':
    # 检测浏览器访问的网址是否是'http://www.bilibili.com/video/'
    # 如果是则自动运行代码去修改html的内容
    url = 'http://www.bilibili.com/video/'
    response = requests.get(url)
    if response.status_code == 200:
        html_content = response.text
        new_html_content = '<li class="bpx-player-ctrl-playbackrate-menu-item" data-value="0.25">0.25x</li>'
        html_content = html_content.replace('<ul class="bpx-player-ctrl-playbackrate-menu">', '<ul class="bpx-player-ctrl-playbackrate-menu">' + new_html_content)
        # 修改html内容
        response = requests.post(url, data=html_content)
        if response.status_code == 200:
            print('修改成功')
        else:
            print('修改失败')






