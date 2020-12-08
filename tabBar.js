Page({
  data: {
    tabIndex: 0,
    tabbar: {
      textColor: "#A2A2A2",
      selectedColor: "#333333",
      backgroundColor: "#ffffff",
      borderStyle: "#ffffff",
      items: [
        {
          name: "首页",
          icon: "/public/images/tabBar/home-icon.png",
          activeIcon: "/public/images/tabBar/home-active.png"
        },
        {
          name: "服务",
          icon: "/public/images/tabBar/service-icon.png",
          activeIcon: "/public/images/tabBar/service-active.png"
        },
        {
          name: "开门",
          icon: "/public/images/tabBar/open.png",
          activeIcon: "/public/images/tabBar/open.png"
        },
        {
          name: "社区",
          icon: "/public/images/tabBar/community-icon.png",
          activeIcon: "/public/images/tabBar/community-active.png"
        },
        {
          name: "我的",
          icon: "/public/images/tabBar/my-icon.png",
          activeIcon: "/public/images/tabBar/my-active.png"
        }
      ],
      paddingBottom: 0
    },
    isLongIOS: false,
    phoneType: ['iPhone X', 'iPhone12,1', 'iPhone11,8']
  },
  onLoad(option) {
    this.setTitle(this.data.tabIndex)
    this.editTabBar();
    if (option.tabIndex) {
      this.setTitle(Number(option.tabIndex))
    }
  },

  editTabBar() {
    let tabBar = this.data.tabbar;
    let pages = getCurrentPages();
    let currentPage = pages[pages.length - 1];
    my.getSystemInfo({
      success: res => {
        console.log('phone-model', res.model)
        let modelmes = res.model;
        if (this.data.phoneType.indexOf(modelmes.toString()) > -1) {
          tabBar.paddingBottom = '30rpx';
          this.setData({
            isLongIOS: true
          })
        }
      },
      complete: () => {
        currentPage.setData({
          tabbar: tabBar
        });
      }
    })
  },

  changeTab(e) {
    this.setTitle(e.target.dataset.tabIndex);
  },

  //组件内跳转其他组件
  goComponont(e) {
    this.setTitle(e);
  },

  setTitle(tabIndex) {
    this.setData({
      tabIndex: tabIndex
    });
    if (tabIndex === 0) {
      my.setNavigationBar({
        title: "悦邻汇"
      });
    } else if (tabIndex === 1) {
      my.setNavigationBar({
        title: "服务"
      });
    } else if (tabIndex === 2) {
      my.setNavigationBar({
        title: "开门"
      });
    } else if (tabIndex === 3) {
      my.setNavigationBar({
        title: "社区公告栏"
      });
    } else {
      my.setNavigationBar({
        title: " "
      });
    }
  }
});
