const routes = {
  home: {
    title: "首页",
    render: () => `
      <div class="grid">
        <div class="panel col-8">
          <div class="panel-header"><strong>概览</strong><span style="color: var(--muted)">今日</span></div>
          <div class="panel-body">
            <div class="grid">
              <div class="panel col-6">
                <div class="panel-header">会话量</div>
                <div class="panel-body"><h2 style="margin:0">1,248</h2><div style="color:var(--muted)">较昨日 +8.2%</div></div>
              </div>
              <div class="panel col-6">
                <div class="panel-header">满意度</div>
                <div class="panel-body"><h2 style="margin:0">96.1%</h2><div style="color:var(--muted)">目标 ≥ 95%</div></div>
              </div>
              <div class="panel col-6">
                <div class="panel-header">平均响应</div>
                <div class="panel-body"><h2 style="margin:0">1.2s</h2><div style="color:var(--muted)">P95 3.8s</div></div>
              </div>
              <div class="panel col-6">
                <div class="panel-header">活跃Agent</div>
                <div class="panel-body"><h2 style="margin:0">42</h2><div style="color:var(--muted)">在线 38</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel col-4">
          <div class="panel-header">公告</div>
          <div class="panel-body">
            <ul style="margin:0; padding-left: 18px; color: var(--muted)">
              <li>v0.1.0 发布：新增导航与基础视图</li>
              <li>支持移动端侧边栏收起</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  },
  agent: {
    title: "agent监控",
    render: () => `
      <div class="panel col-12">
        <div class="panel-header">Agent 运行状态</div>
        <div class="panel-body">
          <p style="color:var(--muted)">这里展示各 Agent 的在线状态、负载、错误率等。</p>
        </div>
      </div>
    `,
  },
  messages: {
    title: "服务消息",
    render: () => `
      <div class="panel col-12">
        <div class="panel-header">消息中心</div>
        <div class="panel-body">
          <p style="color:var(--muted)">统一查看实时对话、通知与待办。</p>
        </div>
      </div>
    `,
  },
  support: {
    title: "二线客服",
    render: () => `
      <div class="panel col-12">
        <div class="panel-header">二线协作台</div>
        <div class="panel-body">
          <p style="color:var(--muted)">处理升级工单、知识回传与复盘。</p>
        </div>
      </div>
    `,
  },
  knowledge: {
    title: "知识管理",
    render: () => {
      const currentSubRoute = getCurrentSubRoute();
      return `
        <div class="subnav-container">
          <nav class="subnav">
            <button class="subnav-item ${currentSubRoute === 'knowledge-base' ? 'is-active' : ''}" data-subroute="knowledge-base">
              <span class="subnav-emoji">📚</span>
              <span class="subnav-label">店铺知识库</span>
            </button>
            <button class="subnav-item ${currentSubRoute === 'product-library' ? 'is-active' : ''}" data-subroute="product-library">
              <span class="subnav-emoji">🛍️</span>
              <span class="subnav-label">商品库</span>
            </button>
          </nav>
          <div class="subnav-content">
            ${renderKnowledgeSubRoute(currentSubRoute)}
          </div>
        </div>
      `;
    },
  },
};

// Sub-navigation functions for knowledge management
function getCurrentSubRoute() {
  const hash = location.hash.replace('#', '');
  if (hash === 'knowledge-base' || hash === 'product-library') {
    return hash;
  }
  return 'knowledge-base'; // default to knowledge-base
}

// Nippon Paint product data
const nipponProducts = {
  '乳胶漆': [
    { name: '净味120二合一', image: 'https://img.alicdn.com/imgextra/i1/2208857003162/O1CN01XxXxXx1XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '净味120三合一', image: 'https://img.alicdn.com/imgextra/i2/2208857003162/O1CN01XxXxXx2XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '净味120五合一', image: 'https://img.alicdn.com/imgextra/i3/2208857003162/O1CN01XxXxXx3XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '净味全效', image: 'https://img.alicdn.com/imgextra/i4/2208857003162/O1CN01XxXxXx4XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '竹炭净味全效', image: 'https://img.alicdn.com/imgextra/i1/2208857003162/O1CN01XxXxXx5XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '抗甲醛净味全效', image: 'https://img.alicdn.com/imgextra/i2/2208857003162/O1CN01XxXxXx6XxXxXxXxXx_!!2208857003162.jpg' }
  ],
  '防水': [
    { name: '防水宝', image: 'https://img.alicdn.com/imgextra/i1/2208857003162/O1CN01XxXxXx7XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '防水宝S', image: 'https://img.alicdn.com/imgextra/i2/2208857003162/O1CN01XxXxXx8XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '防水宝JS', image: 'https://img.alicdn.com/imgextra/i3/2208857003162/O1CN01XxXxXx9XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '防水宝K11', image: 'https://img.alicdn.com/imgextra/i4/2208857003162/O1CN01XxXxXx10XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '防水宝聚合物', image: 'https://img.alicdn.com/imgextra/i1/2208857003162/O1CN01XxXxXx11XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '防水宝弹性', image: 'https://img.alicdn.com/imgextra/i2/2208857003162/O1CN01XxXxXx12XxXxXxXxXx_!!2208857003162.jpg' }
  ],
  '美缝剂': [
    { name: '美缝剂亮光', image: 'https://img.alicdn.com/imgextra/i1/2208857003162/O1CN01XxXxXx13XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '美缝剂亚光', image: 'https://img.alicdn.com/imgextra/i2/2208857003162/O1CN01XxXxXx14XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '美缝剂金属', image: 'https://img.alicdn.com/imgextra/i3/2208857003162/O1CN01XxXxXx15XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '美缝剂透明', image: 'https://img.alicdn.com/imgextra/i4/2208857003162/O1CN01XxXxXx16XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '美缝剂彩色', image: 'https://img.alicdn.com/imgextra/i1/2208857003162/O1CN01XxXxXx17XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '美缝剂防霉', image: 'https://img.alicdn.com/imgextra/i2/2208857003162/O1CN01XxXxXx18XxXxXxXxXx_!!2208857003162.jpg' }
  ],
  '玻璃胶': [
    { name: '玻璃胶透明', image: 'https://img.alicdn.com/imgextra/i1/2208857003162/O1CN01XxXxXx19XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '玻璃胶白色', image: 'https://img.alicdn.com/imgextra/i2/2208857003162/O1CN01XxXxXx20XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '玻璃胶黑色', image: 'https://img.alicdn.com/imgextra/i3/2208857003162/O1CN01XxXxXx21XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '玻璃胶彩色', image: 'https://img.alicdn.com/imgextra/i4/2208857003162/O1CN01XxXxXx22XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '玻璃胶防霉', image: 'https://img.alicdn.com/imgextra/i1/2208857003162/O1CN01XxXxXx23XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '玻璃胶耐候', image: 'https://img.alicdn.com/imgextra/i2/2208857003162/O1CN01XxXxXx24XxXxXxXxXx_!!2208857003162.jpg' }
  ],
  '修补产品': [
    { name: '墙面修补膏', image: 'https://img.alicdn.com/imgextra/i1/2208857003162/O1CN01XxXxXx25XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '瓷砖修补膏', image: 'https://img.alicdn.com/imgextra/i2/2208857003162/O1CN01XxXxXx26XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '木器修补膏', image: 'https://img.alicdn.com/imgextra/i3/2208857003162/O1CN01XxXxXx27XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '金属修补膏', image: 'https://img.alicdn.com/imgextra/i4/2208857003162/O1CN01XxXxXx28XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '石材修补膏', image: 'https://img.alicdn.com/imgextra/i1/2208857003162/O1CN01XxXxXx29XxXxXxXxXx_!!2208857003162.jpg' },
    { name: '裂缝修补剂', image: 'https://img.alicdn.com/imgextra/i2/2208857003162/O1CN01XxXxXx30XxXxXxXxXx_!!2208857003162.jpg' }
  ],
  '功能产品': [],
  '未分组': [],
  
};

function renderKnowledgeSubRoute(subRoute) {
  if (subRoute === 'product-library') {
    return `
      <div class="grid">
        <div class="panel col-12">
          <div class="panel-header">
            <div class="filter-inline" style="display:flex;align-items:center;gap:8px;flex-wrap:nowrap;">
              ${(() => {
                const currentCat = (window.currentProductCategoryFilter || 'ALL');
                const cats = Object.keys(nipponProducts || {}).filter(n => n !== '进口馆');
                const catOptions = ['<option value="ALL"'+(currentCat==='ALL'?' selected':'')+'>全部品类</option>',
                  ...cats.map(c => `<option value="${c}"${currentCat===c?' selected':''}>${c}</option>`)
                ].join('');
                const shops = ['全部店铺', ...getAllShops()];
                const currentShop = (window.currentAdvancedFilter && window.currentAdvancedFilter.shop) || '全部店铺';
                const shopOptions = shops.map(s => `<option value="${s}"${currentShop===s?' selected':''}>${s}</option>`).join('');
                const startVal = (window.currentAdvancedFilter && window.currentAdvancedFilter.start) || '';
                const endVal = (window.currentAdvancedFilter && window.currentAdvancedFilter.end) || '';
                return `
                  <span class="inline-label">店铺</span>
                  <select id="inlineFilterShop" class="form-input" style="width:180px;">${shopOptions}</select>
                  <span class="inline-label">商品品类</span>
                  <select id="inlineFilterCategory" class="form-input" style="width:160px;">${catOptions}</select>
                  <span class="inline-label">创建时间</span>
                  <input id="inlineStartDate" type="date" class="form-input" style="width:160px;" value="${startVal}" />
                  <input id="inlineEndDate" type="date" class="form-input" style="width:160px;" value="${endVal}" />
                  <button class="btn btn-outline reset-filters-btn" id="resetAllFilters">
                    <span class="btn-icon">🔄</span>
                    全部重置
                  </button>
                `;
              })()}
            </div>
            <div class="search-container">
              <input type="text" class="search-input" placeholder="搜索商品名称 / ID" value="${(window.currentAdvancedFilter && window.currentAdvancedFilter.kw) || ''}" />
              <span class="search-icon">🔍</span>
            </div>
          </div>
          
          <!-- 操作模块 -->
          <div class="operations-panel">
            <div class="operations-left">
              <button class="btn btn-outline category-mgmt-btn">
                <span class="btn-icon">⚙️</span>
                品类管理
              </button>
              <button class="btn btn-outline batch-btn" id="openBatchModal">
                <span class="btn-icon">⚙️</span>
                批量配置商品品类
              </button>
              <button class="btn btn-outline add-product-btn">
                <span class="btn-icon">+</span>
                添加商品
              </button>
              <button class="btn btn-outline batch-btn" id="openBatchDeleteModal">
                <span class="btn-icon">🗑️</span>
                批量删除商品信息
              </button>
              <button class="btn btn-danger delete-selected-btn" id="deleteSelectedBtn" style="display: none;">
                <span class="btn-icon">🗑️</span>
                删除选中项
              </button>
            </div>
          </div>
          <div class="panel-body">
            <div class="product-table-container">
              <table class="product-table">
                <thead>
                  <tr>
                    <th class="col-select" style="width: 50px; display: none;">
                      <input type="checkbox" id="selectAllProducts" style="margin: 0;">
                    </th>
                    <th class="col-category">商品</th>
                    <th class="col-shops">关联店铺</th>
                    <th class="col-belong">商品品类</th>
                    <th class="col-created">创建时间</th>
                    <th class="col-actions">操作</th>
                  </tr>
                </thead>
                <tbody>
                  ${getPaginatedProducts().map(product => {
                    const productName = product.name;
                    const productImage = product.image || 'https://via.placeholder.com/40x40/3b82f6/ffffff?text=商品';
                    const createdStr = product.createdAt instanceof Date ? 
                      product.createdAt.toLocaleString('zh-CN', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false
                      }) : '-';
                    const shops = Array.isArray(product.shops) && product.shops.length > 0 
                      ? product.shops 
                      : getShopsForProduct(productName, product.__categoryName);
                    return `
                      <tr class=\"product-row\" data-category=\"${product.__categoryName}\">
                        <td class=\"col-select\" style=\"display: none;\">
                          <input type=\"checkbox\" class=\"product-checkbox\" data-category=\"${product.__categoryName}\" data-product=\"${productName}\" style=\"margin: 0;\">
                        </td>
                        <td class=\"product-cell\">
                          <div class=\"product-indent\">
                            <div class=\"product-item\">
                              <img src=\"${productImage}\" alt=\"${productName}\" class=\"product-image\" onerror=\"this.src='https://via.placeholder.com/40x40/3b82f6/ffffff?text=商品'\" />
                              <div class=\"product-meta\">
                                <span class=\"product-name\">${productName}</span>
                                <span class=\"product-id\">ID: ${product.id || (productName.replace(/[^\\w]/g,'').slice(0,8) + Math.floor(Math.random()*1000))}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class=\"shops-cell\">${shops.map(s => `<span class=\\\"shop-tag\\\">${s}</span>`).join('')}</td>
                        <td class=\"belong-cell\">${product.__categoryName}</td>
                        <td class=\"created-cell\">${createdStr}</td>
                        <td class=\"actions-cell\">
                          <button class=\"btn btn-sm btn-outline view-product-btn\" data-category=\"${product.__categoryName}\" data-product=\"${productName}\">商品详情</button>
                          <button class=\"btn btn-sm edit-product-btn\" data-category=\"${product.__categoryName}\" data-product=\"${productName}\">编辑</button>
                          <button class=\"btn btn-sm btn-outline delete-product-btn\" data-category=\"${product.__categoryName}\" data-product=\"${productName}\">删除</button>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
            <div class="table-footer">
              <div id="inPagePagination"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    // knowledge-base (default)
    return `
      <div class="knowledge-base-layout">
        <!-- Left Panel: Conversation Area -->
        <div class="conversation-panel">
          <div class="conversation-header">
            <h3>知识管理助理 立邦墙面漆客服Agent</h3>
          </div>
          
          <div class="conversation-messages">
            <div class="message agent-message">
              <div class="message-avatar">🤖</div>
              <div class="message-content">
                <div class="message-text">
                  您好！我是知识管理助理，可以帮助您进行知识文件管理、挖掘、分类和覆盖率测试。请问有什么可以帮助您的吗？
                </div>
              </div>
            </div>
            
            <div class="message user-message">
              <div class="message-avatar">👤</div>
              <div class="message-content">
                <div class="message-sender">客服小周</div>
                <div class="message-text">
                  我上传了两个文件：
                  <div class="file-upload">
                    <div class="file-item">
                      <span class="file-icon">📄</span>
                      <span class="file-name">立邦漆双十一销售话术知识库.doc</span>
                      <span class="file-size">16.47MB</span>
                    </div>
                    <div class="file-item">
                      <span class="file-icon">📄</span>
                      <span class="file-name">立邦漆双十一销售话术知识库.pdf</span>
                      <span class="file-size">16.47MB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="message agent-message">
              <div class="message-avatar">🤖</div>
              <div class="message-content">
                <div class="message-text">
                  我看到您上传了知识文件，是否需要从上传的文档中抽取知识？
                </div>
              </div>
            </div>
            
            <div class="message user-message">
              <div class="message-avatar">👤</div>
              <div class="message-content">
                <div class="message-sender">客服小周</div>
                <div class="message-text">请开始抽取知识</div>
              </div>
            </div>
            
            <div class="message agent-message">
              <div class="message-avatar">🤖</div>
              <div class="message-content">
                <div class="message-text">
                  <div class="extraction-status">
                    <div class="status-icon">📄🔍</div>
                    <div class="status-text">正在对新上传的3个文件进行知识抽取 50%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="conversation-input">
            <div class="file-preview">
              <div class="file-preview-item">
                <span class="file-icon">📄</span>
                <span class="file-name">立邦漆双十一销售话术知识...</span>
                <span class="file-progress">50%...</span>
              </div>
            </div>
            <div class="input-actions">
              <button class="btn btn-outline upload-btn">
                <span class="btn-icon">📁</span>
                上传知识文件
              </button>
              <button class="btn btn-primary send-btn">发送</button>
            </div>
          </div>
        </div>
        
        <!-- Right Panel: Knowledge Dimension Folder -->
        <div class="knowledge-folder-panel">
          <div class="folder-header">
            <h3>知识维度文件夹</h3>
            <button class="btn btn-outline custom-test-btn">自定义测试</button>
          </div>
          
          <div class="knowledge-categories">
            <div class="category-section expanded">
              <div class="category-header">
                <button class="expand-btn">√</button>
                <span class="category-name">售前</span>
                <span class="category-count">10000 条知识</span>
              </div>
              <div class="category-items">
                <div class="category-item">
                  <div class="item-icon">三</div>
                  <div class="item-info">
                    <div class="item-name">商品咨询</div>
                    <div class="item-status processing">
                      <span class="status-icon">*</span>
                      <span class="status-text">正在检测测试题覆盖率,稍等片刻......</span>
                    </div>
                  </div>
                  <div class="item-actions">
                    <button class="action-btn">测试 | 查看</button>
                  </div>
                </div>
                
                <div class="category-item">
                  <div class="item-icon">三</div>
                  <div class="item-info">
                    <div class="item-name">商品推荐</div>
                    <div class="item-status success">
                      <span class="status-icon">●</span>
                      <span class="status-text">共3000条知识,测试题覆盖80%</span>
                    </div>
                  </div>
                  <div class="item-actions">
                    <button class="action-btn">测试 | 查看</button>
                  </div>
                </div>
                
                <div class="category-item">
                  <div class="item-icon">三</div>
                  <div class="item-info">
                    <div class="item-name">需求确认</div>
                    <div class="item-status warning">
                      <span class="status-icon">●</span>
                      <span class="status-text">共192000条知识,测试题覆盖50%</span>
                    </div>
                  </div>
                  <div class="item-actions">
                    <button class="action-btn">测试 | 查看</button>
                  </div>
                </div>
                
                <div class="category-item">
                  <div class="item-icon">三</div>
                  <div class="item-info">
                    <div class="item-name">物流政策</div>
                    <div class="item-status success">
                      <span class="status-icon">●</span>
                      <span class="status-text">共3000条知识,测试题覆盖80%</span>
                    </div>
                  </div>
                  <div class="item-actions">
                    <button class="action-btn">测试 | 查看</button>
                  </div>
                </div>
                
                <div class="category-item">
                  <div class="item-icon">三</div>
                  <div class="item-info">
                    <div class="item-name">售后保障政策</div>
                    <div class="item-status success">
                      <span class="status-icon">●</span>
                      <span class="status-text">共3000条知识,测试题覆盖80%</span>
                    </div>
                  </div>
                  <div class="item-actions">
                    <button class="action-btn">测试 | 查看</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="category-section collapsed">
              <div class="category-header">
                <button class="expand-btn">></button>
                <span class="category-name">售中</span>
                <span class="category-count">500 条知识</span>
              </div>
            </div>
            
            <div class="category-section collapsed">
              <div class="category-header">
                <button class="expand-btn">></button>
                <span class="category-name">售后</span>
                <span class="category-count">4000 条知识</span>
              </div>
            </div>
          </div>
          
          <div class="folder-footer">
            <button class="btn btn-primary generate-suggestions-btn">
              生成知识完善建议
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

function setActive(routeKey) {
  document.querySelectorAll('.nav-item').forEach((btn) => {
    if (btn.dataset.route === routeKey) {
      btn.classList.add('is-active');
    } else {
      btn.classList.remove('is-active');
    }
  });
}

function render(routeKey) {
  const route = routes[routeKey] || routes.home;
  document.getElementById('view-title').textContent = route.title;
  document.getElementById('view-container').innerHTML = route.render();
  setActive(routeKey);
  
  // Hide global search for product library to avoid duplication
  const globalSearch = document.getElementById('global-search');
  const topbarActions = document.querySelector('.topbar-actions');
  if (routeKey === 'knowledge' && getCurrentSubRoute() === 'product-library') {
    topbarActions.style.display = 'none';
  } else {
    topbarActions.style.display = 'flex';
  }
}

function getRouteFromHash() {
  const hash = location.hash.replace('#', '');
  // Check if it's a main route
  if (hash && routes[hash]) {
    return hash;
  }
  // Check if it's a sub-route (knowledge-base or product-library)
  if (hash === 'knowledge-base' || hash === 'product-library') {
    return 'knowledge';
  }
  return 'home';
}

window.addEventListener('hashchange', () => {
  render(getRouteFromHash());
  // 确保右下角分页器在切换路由后也立即存在
  setTimeout(() => {
    ensurePaginationRendered();
    updateCategoryPagination();
  }, 0);
});

document.addEventListener('DOMContentLoaded', () => {
  // Main navigation
  document.querySelectorAll('.nav-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const route = btn.dataset.route;
      if (route) {
        location.hash = route;
      }
    });
  });

  // Sub-navigation (delegated event handling)
  document.addEventListener('click', (e) => {
    if (e.target.closest('.subnav-item')) {
      const subnavItem = e.target.closest('.subnav-item');
      const subroute = subnavItem.dataset.subroute;
      if (subroute) {
        location.hash = subroute;
      }
    }
    
    // Product table expand/collapse functionality
    if (e.target.closest('.expand-btn')) {
      const expandBtn = e.target.closest('.expand-btn');
      const category = expandBtn.dataset.category;
      const expandIcon = expandBtn.querySelector('.expand-icon');
      const productRows = document.querySelectorAll(`tr.product-row[data-category="${category}"]`);
      
      const isExpanded = expandIcon.textContent === '▼';
      
      if (isExpanded) {
        // Collapse
        expandIcon.textContent = '▶';
        productRows.forEach(row => {
          row.style.display = 'none';
        });
      } else {
        // Expand
        expandIcon.textContent = '▼';
        productRows.forEach(row => {
          row.style.display = 'table-row';
        });
      }
    }
    
    // Category management button - handled by delegated event listener
    
    // Add product button
    if (e.target.closest('.add-product-btn')) {
      showAddProductModal();
    }
    
    // Batch operations - open modal for 批量操作, keep delete alert for now
    if (e.target.closest('#openBatchModal')) {
      showBatchModal();
    } else if (e.target.closest('.batch-btn')) {
      const batchBtn = e.target.closest('.batch-btn');
      if (batchBtn.textContent.includes('批量删除')) {
        toggleBatchDeleteMode();
      }
    }
    
    // Delete selected button
    if (e.target.closest('#deleteSelectedBtn')) {
      performBatchDelete();
    }
    
    // Page navigation
    if (e.target.closest('.page-btn')) {
      const pageBtn = e.target.closest('.page-btn');
      const page = parseInt(pageBtn.dataset.page);
      if (page && page !== currentProductPage) {
        currentProductPage = page;
        refreshProductLibrary();
      }
    }
    
    if (e.target.closest('.page-nav-btn')) {
      const btn = e.target.closest('.page-nav-btn');
      const nav = btn.getAttribute('data-nav');
      const total = getTotalProductPages();
      if (nav === 'prev' && currentProductPage > 1) {
        currentProductPage -= 1;
        refreshProductLibrary();
      } else if (nav === 'next' && currentProductPage < total) {
        currentProductPage += 1;
        refreshProductLibrary();
      }
    }
    
    if (e.target.closest('.go-btn')) {
      const pageInput = document.querySelector('.page-input');
      const pageNum = pageInput.value;
      if (pageNum) {
        alert(`跳转到第 ${pageNum} 页`);
      } else {
        alert('请输入页码');
      }
    }
    
    // Knowledge base interactions
    if (e.target.closest('.upload-btn')) {
      alert('文件上传功能开发中...');
    }
    
    if (e.target.closest('.send-btn')) {
      alert('发送消息功能开发中...');
    }
    
    if (e.target.closest('.custom-test-btn')) {
      alert('自定义测试功能开发中...');
    }
    
    if (e.target.closest('.action-btn')) {
      alert('测试/查看功能开发中...');
    }
    
    if (e.target.closest('.generate-suggestions-btn')) {
      alert('生成知识完善建议功能开发中...');
    }
    
    // Category expand/collapse
    if (e.target.closest('.category-header')) {
      const categorySection = e.target.closest('.category-section');
      const expandBtn = categorySection.querySelector('.expand-btn');
      const categoryItems = categorySection.querySelector('.category-items');
      
      if (categorySection.classList.contains('expanded')) {
        categorySection.classList.remove('expanded');
        categorySection.classList.add('collapsed');
        expandBtn.textContent = '>';
        if (categoryItems) {
          categoryItems.style.display = 'none';
        }
      } else {
        categorySection.classList.remove('collapsed');
        categorySection.classList.add('expanded');
        expandBtn.textContent = '√';
        if (categoryItems) {
          categoryItems.style.display = 'flex';
        }
      }
    }
    
    // Modal interactions
    if (e.target.closest('.modal-close') || (e.target.closest('.modal-overlay') && e.target.classList.contains('modal-overlay'))) {
      hideAddProductModal();
    }
    
    if (e.target.closest('.option-card')) {
      const optionCard = e.target.closest('.option-card');
      selectOption(optionCard);
    }
    
    if (e.target.closest('.next-step-btn')) {
      const nextStepBtn = document.getElementById('nextStepBtn');
      const selectionStep = document.getElementById('selectionStep');
      const smartRecognitionStep = document.getElementById('smartRecognitionStep');
      
      if (selectionStep.style.display !== 'none') {
        // Currently on selection step
        const selectedOption = document.querySelector('.option-card.selected');
        if (selectedOption) {
          const option = selectedOption.dataset.option;
          if (option === 'smart-recognition') {
            showSmartRecognitionStep();
          } else if (option === 'batch-import') {
            showBatchImportStep();
          }
        }
      } else if (smartRecognitionStep.style.display !== 'none') {
        // Currently on smart recognition step
        const linkInput = document.querySelector('.link-input');
        if (linkInput.value.trim()) {
          alert('开始识别功能开发中...');
          hideAddProductModal();
        } else {
          alert('请输入店铺链接地址');
        }
      } else {
        // Check if we're on batch import step
        const batchImportStep = document.getElementById('batchImportStep');
        if (batchImportStep && batchImportStep.style.display !== 'none') {
          const fileInput = document.getElementById('fileInput');
          if (fileInput && fileInput.files.length > 0) {
            alert('开始批量导入功能开发中...');
            hideAddProductModal();
          } else {
            alert('请先选择要上传的文件');
          }
        }
      }
    }
    
    if (e.target.closest('.back-btn')) {
      showSelectionStep();
    }
    
    // Batch import interactions
    if (e.target.closest('.download-template-btn')) {
      downloadExcelTemplate();
    }
    
    if (e.target.closest('.select-file-btn') || e.target.closest('.upload-zone')) {
      const fileInput = document.getElementById('fileInput');
      if (fileInput) {
        fileInput.click();
      }
    }
    
    if (e.target.closest('#fileInput')) {
      handleFileSelect(e.target);
    }
  });
  
  // Search functionality
  document.addEventListener('input', (e) => {
    if (e.target.classList.contains('search-input')) {
      const searchTerm = e.target.value.toLowerCase();
      const allRows = document.querySelectorAll('.category-row, .product-row');
      
      allRows.forEach(row => {
        const categoryName = row.querySelector('.category-name')?.textContent.toLowerCase();
        const productName = row.querySelector('.product-name')?.textContent.toLowerCase();
        const mainProductLabel = row.querySelector('.main-product-label')?.textContent.toLowerCase();
        const textToSearch = categoryName || productName || mainProductLabel || '';
        
        if (textToSearch.includes(searchTerm)) {
          row.style.display = 'table-row';
        } else {
          row.style.display = 'none';
        }
      });
    }
  });

  render(getRouteFromHash());
  
  // Add drag and drop functionality for batch import
  setupDragAndDrop();
  // 初次加载确保渲染分页器
  setTimeout(updateCategoryPagination, 0);
});

// Modal functions
function showAddProductModal() {
  const modal = document.getElementById('addProductModal');
  if (modal) {
    // Reset modal to initial state
    resetModalToInitialState();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function resetModalToInitialState() {
  const selectionStep = document.getElementById('selectionStep');
  const smartRecognitionStep = document.getElementById('smartRecognitionStep');
  const batchImportStep = document.getElementById('batchImportStep');
  const nextStepBtn = document.getElementById('nextStepBtn');
  const linkInput = document.querySelector('.link-input');
  const fileInput = document.getElementById('fileInput');
  
  if (selectionStep && smartRecognitionStep && batchImportStep && nextStepBtn) {
    selectionStep.style.display = 'block';
    smartRecognitionStep.style.display = 'none';
    batchImportStep.style.display = 'none';
    nextStepBtn.textContent = '下一步';
  }
  
  if (linkInput) {
    linkInput.value = '';
  }
  
  if (fileInput) {
    fileInput.value = '';
  }
}

function hideAddProductModal() {
  const modal = document.getElementById('addProductModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function selectOption(optionCard) {
  // Remove selected class from all options
  document.querySelectorAll('.option-card').forEach(card => {
    card.classList.remove('selected');
  });
  
  // Add selected class to clicked option
  optionCard.classList.add('selected');
}

function showSmartRecognitionStep() {
  const selectionStep = document.getElementById('selectionStep');
  const smartRecognitionStep = document.getElementById('smartRecognitionStep');
  const nextStepBtn = document.getElementById('nextStepBtn');
  
  if (selectionStep && smartRecognitionStep && nextStepBtn) {
    selectionStep.style.display = 'none';
    smartRecognitionStep.style.display = 'block';
    nextStepBtn.textContent = '开始识别';
  }
}

function showSelectionStep() {
  const selectionStep = document.getElementById('selectionStep');
  const smartRecognitionStep = document.getElementById('smartRecognitionStep');
  const batchImportStep = document.getElementById('batchImportStep');
  const nextStepBtn = document.getElementById('nextStepBtn');
  
  if (selectionStep && smartRecognitionStep && batchImportStep && nextStepBtn) {
    selectionStep.style.display = 'block';
    smartRecognitionStep.style.display = 'none';
    batchImportStep.style.display = 'none';
    nextStepBtn.textContent = '下一步';
  }
}

function showBatchImportStep() {
  const selectionStep = document.getElementById('selectionStep');
  const smartRecognitionStep = document.getElementById('smartRecognitionStep');
  const batchImportStep = document.getElementById('batchImportStep');
  const nextStepBtn = document.getElementById('nextStepBtn');
  
  if (selectionStep && smartRecognitionStep && batchImportStep && nextStepBtn) {
    selectionStep.style.display = 'none';
    smartRecognitionStep.style.display = 'none';
    batchImportStep.style.display = 'block';
    nextStepBtn.textContent = '开始导入';
  }
}

function handleFileSelect(fileInput) {
  const files = fileInput.files;
  if (files.length > 0) {
    const file = files[0];
    const allowedTypes = ['.xlsx', '.xls', '.csv'];
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    
    if (allowedTypes.includes(fileExtension)) {
      console.log('Selected file:', file.name);
      // Here you would typically show file info or preview
    } else {
      alert('请选择支持的文件格式：.xlsx, .xls, .csv');
      fileInput.value = '';
    }
  }
}

function setupDragAndDrop() {
  const uploadZone = document.getElementById('uploadZone');
  const fileInput = document.getElementById('fileInput');
  
  if (uploadZone && fileInput) {
    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      uploadZone.addEventListener(eventName, preventDefaults, false);
      document.body.addEventListener(eventName, preventDefaults, false);
    });
    
    // Highlight drop area when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
      uploadZone.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
      uploadZone.addEventListener(eventName, unhighlight, false);
    });
    
    // Handle dropped files
    uploadZone.addEventListener('drop', handleDrop, false);
  }
}

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function highlight(e) {
  const uploadZone = document.getElementById('uploadZone');
  if (uploadZone) {
    uploadZone.classList.add('dragover');
  }
}

function unhighlight(e) {
  const uploadZone = document.getElementById('uploadZone');
  if (uploadZone) {
    uploadZone.classList.remove('dragover');
  }
}

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  const fileInput = document.getElementById('fileInput');
  
  if (fileInput && files.length > 0) {
    fileInput.files = files;
    handleFileSelect(fileInput);
  }
}

function downloadExcelTemplate() {
  // 创建工作簿
  const wb = XLSX.utils.book_new();
  
  // 定义表头
  const headers = [
    '商品名称',
    '链接名称', 
    '商品链接',
    '品类',
    '是否主商品',
    'SKU',
    '规格信息',
    '知识详情'
  ];
  
  // 定义示例数据
  const sampleData = [
    '示例商品',
    '示例商品',
    'https://example.com',
    '示例品类',
    '是',
    'SKU001',
    '规格信息示例',
    '知识详情示例'
  ];
  
  // 创建工作表数据
  const wsData = [
    headers,           // 第一行：表头
    sampleData,        // 第二行：示例数据
    ['', '', '', '', '', '', '', ''],  // 第三行：空行
    ['', '', '', '', '', '', '', ''],  // 第四行：空行
    ['', '', '', '', '', '', '', '']   // 第五行：空行
  ];
  
  // 创建工作表
  const ws = XLSX.utils.aoa_to_sheet(wsData);
  
  // 设置列宽
  const colWidths = [
    { wch: 20 }, // 商品名称
    { wch: 20 }, // 链接名称
    { wch: 30 }, // 商品链接
    { wch: 15 }, // 品类
    { wch: 12 }, // 是否主商品
    { wch: 15 }, // SKU
    { wch: 25 }, // 规格信息
    { wch: 30 }  // 知识详情
  ];
  ws['!cols'] = colWidths;
  
  // 设置表头样式（加粗）
  const headerRange = XLSX.utils.decode_range(ws['!ref']);
  for (let col = headerRange.s.c; col <= headerRange.e.c; col++) {
    const cellAddress = XLSX.utils.encode_cell({ r: 0, c: col });
    if (!ws[cellAddress]) continue;
    ws[cellAddress].s = {
      font: { bold: true },
      fill: { fgColor: { rgb: "F0F0F0" } },
      alignment: { horizontal: "center" }
    };
  }
  
  // 添加工作表到工作簿
  XLSX.utils.book_append_sheet(wb, ws, '商品导入模板');
  
  // 生成Excel文件并下载
  const fileName = '商品导入模板.xlsx';
  XLSX.writeFile(wb, fileName);
}

// Category Management Functions
let categories = [
  { id: 1, name: '乳胶漆', productCount: 6 },
  { id: 2, name: '防水', productCount: 3 },
  { id: 3, name: '美缝剂', productCount: 6 },
  { id: 4, name: '玻璃胶', productCount: 3 },
  { id: 5, name: '修补产品', productCount: 2 },
  { id: 6, name: '功能产品', productCount: 0 },
  { id: 7, name: '未分组', productCount: 0 }
];

// Function to get products for a category
function getProductsForCategory(categoryName) {
  return nipponProducts[categoryName] || [];
}

// Function to get product names for a category (for backward compatibility)
function getProductNamesForCategory(categoryName) {
  const products = getProductsForCategory(categoryName);
  return products.map(product => typeof product === 'string' ? product : product.name);
}

// Function to update product count for a category
function updateCategoryProductCount(categoryName) {
  const category = categories.find(cat => cat.name === categoryName);
  if (category) {
    category.productCount = getProductsForCategory(categoryName).length;
  }
}

// Pagination variables for products (10 per page)
let currentProductPage = 1;
const productsPerPage = 10;

// Build flattened product list with category context
function getAllProductsFlattened() {
  const filter = window.currentProductCategoryFilter || 'ALL';
  const adv = window.currentAdvancedFilter || {};
  
  
  return Object.entries(nipponProducts).flatMap(([cat, items]) =>
    (items || []).map(p => (typeof p === 'string' ? { name: p } : p)).map(p => {
      const withMeta = {
        ...p,
        createdAt: p.createdAt ? new Date(p.createdAt) : new Date(Date.now() - Math.floor(Math.random()*30)*24*60*60*1000),
        __categoryName: cat
      };
      // ensure shops present for filtering
      if (!Array.isArray(withMeta.shops)) {
        withMeta.shops = getShopsForProduct(withMeta.name, cat);
      }
      return withMeta;
    })
  ).filter(p => {
    // 商品品类筛选
    const categoryOk = filter === 'ALL' ? true : p.__categoryName === filter;
    
    // 关键词搜索筛选
    const keywordOk = adv.kw ? p.name.toLowerCase().includes(adv.kw.toLowerCase()) : true;
    
    // 店铺筛选
    const shopOk = adv.shop && adv.shop !== '全部店铺' && adv.shop !== '全部' 
      ? (Array.isArray(p.shops) ? p.shops.includes(adv.shop) : false) 
      : true;
    
    // 创建时间筛选
    const dateOk = (() => {
      if (!adv.start && !adv.end) return true;
      const pDate = p.createdAt;
      if (adv.start && pDate < new Date(adv.start)) return false;
      if (adv.end) {
        const endDate = new Date(adv.end);
        endDate.setHours(23, 59, 59, 999);
        if (pDate > endDate) return false;
      }
      return true;
    })();
    
    return categoryOk && keywordOk && shopOk && dateOk;
  })
  .sort((a, b) => b.createdAt - a.createdAt);
}

// Collect unique shops across all products (ignores current filters)
function getAllShops() {
  const shopSet = new Set();
  Object.entries(nipponProducts).forEach(([cat, items]) => {
    (items || []).forEach(pRaw => {
      const p = (typeof pRaw === 'string' ? { name: pRaw } : pRaw);
      const shops = Array.isArray(p.shops) && p.shops.length ? p.shops : getShopsForProduct(p.name, cat);
      shops.forEach(s => shopSet.add(s));
    });
  });
  return Array.from(shopSet);
}

// heuristic mapping shops by product/category
function getShopsForProduct(productName, categoryName){
  const base = ['立邦官方旗舰店'];
  if (/净味|全效|乳胶漆/.test(productName) || /乳胶漆/.test(categoryName)) {
    return ['立邦官方旗舰店','立邦乳胶漆官方旗舰店'];
  }
  if (/防水|防潮|防霉/.test(productName) || /防水/.test(categoryName)) {
    return ['立邦官方旗舰店','立邦防水旗舰店'];
  }
  if (/补墙|修补膏/.test(productName) || /修补产品/.test(categoryName)) {
    return ['立邦官方旗舰店','立邦补墙膏旗舰店'];
  }
  if (/美缝/.test(productName) || /美缝剂/.test(categoryName)) {
    return ['立邦官方旗舰店','立邦美缝官方旗舰店'];
  }
  return base;
}

function getPaginatedProducts() {
  const all = getAllProductsFlattened();
  const start = (currentProductPage - 1) * productsPerPage;
  return all.slice(start, start + productsPerPage);
}

function getTotalProductPages() {
  const total = getAllProductsFlattened().length;
  return Math.max(1, Math.ceil(total / productsPerPage));
}

// Function to update product pagination UI
function updateCategoryPagination() {
  // 仅在商品库子路由下渲染
  if (getCurrentSubRoute() !== 'product-library') return;
  const container = document.getElementById('inPagePagination');
  if (!container) return;
  const totalPages = getTotalProductPages();
  currentProductPage = Math.min(currentProductPage, totalPages);
  const currentPage = currentProductPage;
  const total = getAllProductsFlattened().length;
  const start = total ? (currentPage - 1) * productsPerPage + 1 : 0;
  const end = total ? Math.min(total, currentPage * productsPerPage) : 0;
  const pagesHtml = buildCompactPageNumbers(currentPage, totalPages).map(p => {
    if (p === '…') return '<span class="page-ellipsis">…</span>';
    return `<button class="page-btn ${p===currentPage?'active':''}" data-page="${p}">${p}</button>`;
  }).join('');
  container.innerHTML = `
    <div class="pagination" aria-label="商品分页">
      <div class="pagination-info">第 ${currentPage}/${totalPages} 页 · 显示 ${start}-${end}</div>
      <div class="page-numbers">
        <button class="page-nav-btn" data-nav="prev" ${currentPage<=1?'disabled':''} title="上一页">‹</button>
        ${pagesHtml}
        <button class="page-nav-btn" data-nav="next" ${currentPage>=totalPages?'disabled':''} title="下一页">›</button>
      </div>
    </div>
  `;
}

// Remove legacy floating pagination and render only in-page paginations
function ensurePaginationRendered() {
  // 清理旧的遗留分页容器（不影响页面内分页）
  const nodes = document.querySelectorAll('#productPagination, #productPaginationFallback, #floatingPaginator');
  nodes.forEach(n => n && n.parentNode && n.parentNode.removeChild(n));
}

// ----- Floating paginator (fixed bottom-right) -----
function buildCompactPageNumbers(current, total){
  const pages = [];
  const add = (v)=>{ if (pages[pages.length-1] !== v) pages.push(v); };
  const windowSize = 1; // neighbors on each side
  const left = Math.max(1, current - windowSize);
  const right = Math.min(total, current + windowSize);
  add(1);
  if (left > 2) add('…');
  for (let i = left; i <= right; i++) add(i);
  if (right < total - 1) add('…');
  if (total > 1) add(total);
  return pages;
}

function goToProductPage(page) {
  const totalPages = getTotalProductPages();
  if (page >= 1 && page <= totalPages) {
    currentProductPage = page;
    refreshProductLibrary();
  }
}

function showCategoryModal() {
  const modal = document.getElementById('categoryModal');
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
  renderCategoryTable();
}

function hideCategoryModal() {
  const modal = document.getElementById('categoryModal');
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

function renderCategoryTable() {
  const tbody = document.getElementById('categoryTableBody');
  tbody.innerHTML = '';
  
  categories.forEach(category => {
    const row = document.createElement('tr');
    const isUngrouped = category.name === '未分组';
    row.innerHTML = `
      <td class="${isUngrouped ? 'text-muted' : ''}">${category.name}</td>
      <td>${category.productCount}</td>
      <td>
        <div class="category-actions">
          ${isUngrouped ? 
            '<span class="text-muted">系统分类</span>' : 
            `<button class="edit-category-btn" onclick="editCategory(${category.id})">编辑</button>
             <button class="delete-category-btn" onclick="deleteCategory(${category.id})">删除</button>`
          }
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function addCategory() {
  const input = document.getElementById('newCategoryName');
  const name = input.value.trim();
  
  if (!name) {
    alert('请输入品类名称');
    return;
  }
  
  // 检查是否已存在
  if (categories.some(cat => cat.name === name)) {
    alert('该品类已存在');
    return;
  }
  
  const newCategory = {
    id: Date.now(),
    name: name,
    productCount: 0
  };
  
  categories.push(newCategory);
  
  // 在nipponProducts中添加新的空品类
  nipponProducts[name] = [];
  
  // 更新过滤后的品类列表
  filteredCategories = [...categories];
  
  input.value = '';
  renderCategoryTable();
  
  // 刷新商品库页面显示
  refreshProductLibrary();
}

function editCategory(id) {
  const category = categories.find(cat => cat.id === id);
  if (!category) return;
  
  const newName = prompt('请输入新的品类名称:', category.name);
  if (newName && newName.trim() && newName.trim() !== category.name) {
    // 检查是否已存在
    if (categories.some(cat => cat.name === newName.trim() && cat.id !== id)) {
      alert('该品类已存在');
      return;
    }
    
    const oldName = category.name;
    const products = nipponProducts[oldName] || [];
    
    // 更新品类名称
    category.name = newName.trim();
    
    // 更新nipponProducts中的键名
    delete nipponProducts[oldName];
    nipponProducts[newName.trim()] = products;
    
    // 更新过滤后的品类列表
    filteredCategories = [...categories];
    
    renderCategoryTable();
    
    // 刷新商品库页面显示
    refreshProductLibrary();
  }
}

function deleteCategory(id) {
  const category = categories.find(cat => cat.id === id);
  if (!category) return;
  
  if (category.productCount > 0) {
    alert('该品类下还有商品，无法删除');
    return;
  }
  
  if (confirm(`确定要删除品类"${category.name}"吗？`)) {
    // 从categories数组中删除
    categories = categories.filter(cat => cat.id !== id);
    
    // 从nipponProducts中删除对应的品类
    delete nipponProducts[category.name];
    
    // 更新过滤后的品类列表
    filteredCategories = [...categories];
    
    renderCategoryTable();
    
    // 刷新商品库页面显示
    refreshProductLibrary();
  }
}

// 全局事件监听器，只绑定一次
if (!window.productLibraryEventsInitialized) {
  // 使用事件委托来处理动态添加的元素
  document.addEventListener('change', function(e) {
    if (e.target.id === 'inlineFilterCategory') {
      window.currentProductCategoryFilter = e.target.value; 
      currentProductPage = 1; 
      refreshProductLibrary(); 
    } else if (e.target.id === 'inlineFilterShop') {
      window.currentAdvancedFilter = { 
        ...(window.currentAdvancedFilter||{}), 
        shop: e.target.value==='全部店铺'? '全部店铺' : e.target.value 
      }; 
      currentProductPage = 1; 
      refreshProductLibrary(); 
    } else if (e.target.id === 'inlineStartDate') {
      window.currentAdvancedFilter = { 
        ...(window.currentAdvancedFilter||{}), 
        start: e.target.value||'' 
      }; 
      currentProductPage = 1; 
      refreshProductLibrary(); 
    } else if (e.target.id === 'inlineEndDate') {
      window.currentAdvancedFilter = { 
        ...(window.currentAdvancedFilter||{}), 
        end: e.target.value||'' 
      }; 
      currentProductPage = 1; 
      refreshProductLibrary(); 
    }
  });

  // 搜索功能
  document.addEventListener('input', function(e) {
    if (e.target.classList.contains('search-input')) {
      // 保存搜索关键词到筛选条件
      window.currentAdvancedFilter = { 
        ...(window.currentAdvancedFilter||{}), 
        kw: e.target.value 
      };
      
      // 重置商品页码
      currentProductPage = 1;
      
      // 重新渲染页面
      refreshProductLibrary();
    }
  });
  
  // 全部重置按钮
  document.addEventListener('click', function(e) {
    if (e.target.closest('#resetAllFilters')) {
      resetAllFilters();
    }
  });
  
  window.productLibraryEventsInitialized = true;
}

function setupProductLibraryEvents() {
  // 初始化筛选条件
  if (!window.currentProductCategoryFilter) {
    window.currentProductCategoryFilter = 'ALL';
  }
  if (!window.currentAdvancedFilter) {
    window.currentAdvancedFilter = { shop: '全部店铺', start: '', end: '' };
  }
}

function refreshProductLibrary() {
  // 如果当前在商品库页面，重新渲染页面内容
  const currentSubRoute = getCurrentSubRoute();
  if (currentSubRoute === 'product-library') {
    const subnavContent = document.querySelector('.subnav-content');
    if (subnavContent) {
      const html = renderKnowledgeSubRoute('product-library');
      subnavContent.innerHTML = html;
      // 渲染筛选条与分页（确保容器存在后再渲染）
      setupProductLibraryEvents();
      updateCategoryPagination();
    }
  }
}

function editProduct(categoryName, productName) {
  // 存储当前编辑的商品信息
  window.currentEditingProduct = {
    categoryName: categoryName,
    productName: productName
  };
  
  // 填充表单数据（安全判断，避免空节点导致报错）
  const linkInputEl = document.getElementById('productLink');
  if (linkInputEl) linkInputEl.value = 'https://detail.tmall.com/item.htm?id=922959353039';
  const nameInputEl = document.getElementById('productName');
  if (nameInputEl) nameInputEl.value = productName;
  const defaultInfo = `品牌: Nabis/蜡笔派
风格: 现代轻奢
货号: SFD-LZL1
款式: 盖巾式
上市年份季节: 2025年夏季
功能: 防尘
功能: 防猫抓
功能: 防滑
功能: 其他/other
功能: 耐磨
材质: 雪尼尔
适用对象: 通用`;
  const infoEditor = document.getElementById('productInfoEditor');
  if (infoEditor) {
    infoEditor.innerHTML = defaultInfo.split('\n').map(line => line ? `<div>${line}</div>` : '<div><br/></div>').join('');
  }
  
  // 更新字符计数器
  updateCharCounters();

  // 渲染关联店铺下拉（单选，风格与所属类别一致）
  const shopSelect = document.getElementById('shopSelect');
  if (shopSelect) {
    const allShops = [
      '立邦官方旗舰店',
      '立邦乳胶漆官方旗舰店',
      '立邦防水旗舰店',
      '立邦美缝官方旗舰店',
      '立邦补墙膏旗舰店'
    ];
    const products = nipponProducts[categoryName] || [];
    const raw = products.find(p => (typeof p === 'string' ? p === productName : p.name === productName));
    const productObj = typeof raw === 'string' ? { name: raw } : (raw || { name: productName });
    const currentShop = Array.isArray(productObj.shops) && productObj.shops.length > 0 ? productObj.shops[0] : getShopsForProduct(productName, categoryName)[0];
    shopSelect.innerHTML = allShops.map(s => `<option value="${s}">${s}</option>`).join('');
    shopSelect.value = currentShop;
  }

  // 渲染所属类别下拉
  const catSelect = document.getElementById('productCategorySelect');
  if (catSelect) {
    const catNames = Object.keys(nipponProducts).filter(n => n !== '进口馆');
    catSelect.innerHTML = catNames.map(c => `<option value="${c}">${c}</option>`).join('');
    // 选中当前商品的类别
    catSelect.value = categoryName;
  }
  
  // 显示模态卡片
  showEditProductModal();
}

function deleteProduct(categoryName, productName) {
  if (confirm(`确定要删除商品"${productName}"吗？`)) {
    const products = nipponProducts[categoryName] || [];
    const index = products.indexOf(productName);
    if (index !== -1) {
      products.splice(index, 1);
      updateCategoryProductCount(categoryName);
      refreshProductLibrary();
    }
  }
}

function showProductDetail(categoryName, productName) {
  // 找到商品数据
  const products = nipponProducts[categoryName] || [];
  const product = products.find(p => {
    if (typeof p === 'string') {
      return p === productName;
    }
    return p.name === productName;
  });
  
  if (!product) return;
  
  // 填充商品详情数据
  const productData = typeof product === 'string' ? { name: product } : product;
  
  // 基本信息
  document.getElementById('detailProductLink').textContent = productData.link || 'https://detail.tmall.com/item.htm?id=922959353039';
  document.getElementById('detailProductName').textContent = productData.name || '瓷砖修补膏';
  
  // 商品图片
  const detailImage = document.getElementById('detailProductImage');
  if (productData.image) {
    detailImage.src = productData.image;
  } else {
    detailImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iNCIgZmlsbD0iI0Y1RjVGNSIvPgo8cGF0aCBkPSJNMjAgMjBIMzBWNDBIMjBWMjBaIiBmaWxsPSIjREREREREIi8+CjxwYXRoIGQ9Ik0zMCAyMEg0MFY0MEgzMFYyMFoiIGZpbGw9IiNEREQ0REQiLz4KPC9zdmc+';
  }
  
  // 商品信息
  const productInfo = productData.info || `品牌: Nabis/蜡笔派
风格: 现代轻奢
货号: SFD-LZL1
款式: 盖巾式
上市年份季节: 2025年夏季
功能: 防尘
功能: 防猫抓
功能: 防滑
功能: 其他/other
功能: 耐磨
材质: 雪尼尔
适用对象: 通用`;
  const detailInfoEl = document.getElementById('detailProductInfo');
  if (detailInfoEl) {
    detailInfoEl.textContent = productInfo;
  }
  
  // 更新字符计数
  const charCount = productInfo.length;
  document.getElementById('detailInfoCounter').textContent = `${charCount}/3000`;
  
  // SKU配置
  document.getElementById('detailSkuConfig').textContent = productData.skuConfig || '例如：颜色: 白色；容量: 5L；型号: A001';
  
  // 关联店铺
  const shops = Array.isArray(productData.shops) && productData.shops.length > 0 
    ? productData.shops 
    : getShopsForProduct(productData.name, categoryName);
  const shopsText = shops.length > 0 ? shops.join(', ') : '立邦官方旗舰店';
  document.getElementById('detailShops').textContent = shopsText;
  
  // 所属类别
  document.getElementById('detailCategory').textContent = categoryName || '修补产品';
  
  // 显示抽屉
  const drawer = document.getElementById('productDetailDrawer');
  drawer.style.display = 'flex';
  setTimeout(() => {
    drawer.classList.add('show');
  }, 10);
}

function hideProductDetail() {
  const drawer = document.getElementById('productDetailDrawer');
  drawer.classList.remove('show');
  setTimeout(() => {
    drawer.style.display = 'none';
  }, 300);
}

function editCategoryFromTable(categoryName) {
  const newName = prompt('请输入新的品类名称:', categoryName);
  if (newName && newName.trim() && newName.trim() !== categoryName) {
    // 检查是否已存在
    if (categories.some(cat => cat.name === newName.trim())) {
      alert('该品类已存在');
      return;
    }
    
    const category = categories.find(cat => cat.name === categoryName);
    if (category) {
      const oldName = category.name;
      const products = nipponProducts[oldName] || [];
      
      // 更新品类名称
      category.name = newName.trim();
      
      // 更新nipponProducts中的键名
      delete nipponProducts[oldName];
      nipponProducts[newName.trim()] = products;
      
      // 更新过滤后的品类列表
      filteredCategories = [...categories];
      
      refreshProductLibrary();
    }
  }
}

function deleteCategoryFromTable(categoryName) {
  const category = categories.find(cat => cat.name === categoryName);
  if (!category) return;
  
  if (category.productCount > 0) {
    alert('该品类下还有商品，无法删除');
    return;
  }
  
  if (confirm(`确定要删除品类"${categoryName}"吗？`)) {
    // 从categories数组中删除
    categories = categories.filter(cat => cat.name !== categoryName);
    
    // 从nipponProducts中删除对应的品类
    delete nipponProducts[categoryName];
    
    // 更新过滤后的品类列表
    filteredCategories = [...categories];
    
    refreshProductLibrary();
  }
}

function showEditProductModal() {
  const modal = document.getElementById('editProductModal');
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

function hideEditProductModal() {
  const modal = document.getElementById('editProductModal');
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

// Batch Modal helpers
function showBatchModal() {
  const modal = document.getElementById('batchModal');
  if (!modal) return;
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10);
  renderTransferLists();
}

function hideBatchModal() {
  const modal = document.getElementById('batchModal');
  if (!modal) return;
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 300);
}

function renderTransferLists() {
  const productList = document.getElementById('transferProductList');
  const categoryList = document.getElementById('transferCategoryList');
  const productHeader = document.getElementById('transferProductHeader');
  const categoryHeader = document.getElementById('transferCategoryHeader');
  if (!productList || !categoryList) return;

  // flatten products with category context
  const allProducts = Object.entries(nipponProducts).flatMap(([cat, items]) =>
    (items || []).map(p => (typeof p === 'string' ? { name: p, category: cat } : { ...p, category: cat }))
  );

  productList.innerHTML = allProducts.map((p, i) => {
    const id = p.id || (p.name.replace(/[^\w]/g,'').slice(0,8) + (p.createdAt ? '' : Math.floor(Math.random()*1000)));
    return `
      <label class="transfer-item">
        <input type=\"checkbox\" data-name=\"${p.name}\" data-category=\"${p.category}\" />
        <span>${p.name}</span>
        <span style=\"margin-left:auto;color:#64748b;font-size:12px;\">ID: ${id}</span>
      </label>
    `;
  }).join('');

  if (productHeader) {
    productHeader.textContent = `选择商品（${allProducts.length}）`;
  }

  categoryList.innerHTML = categories.map(c => `
    <label class=\"transfer-item\">
      <input type=\"checkbox\" data-category=\"${c.name}\" />
      <span>${c.name}</span>
    </label>
  `).join('');

  if (categoryHeader) {
    categoryHeader.textContent = `选择品类（${categories.length}）`;
  }

  // simple search filters
  const prodSearch = document.getElementById('transferProductSearch');
  const catSearch = document.getElementById('transferCategorySearch');
  if (prodSearch) {
    prodSearch.oninput = () => {
      Array.from(productList.children).forEach(el => {
        const text = el.textContent.toLowerCase();
        el.style.display = text.includes(prodSearch.value.toLowerCase()) ? '' : 'none';
      });
    };
  }
  if (catSearch) {
    catSearch.oninput = () => {
      Array.from(categoryList.children).forEach(el => {
        const text = el.textContent.toLowerCase();
        el.style.display = text.includes(catSearch.value.toLowerCase()) ? '' : 'none';
      });
    };
  }
}

// Batch delete modal helpers
function showBatchDeleteModal() {
  const modal = document.getElementById('batchDeleteModal');
  if (!modal) return;
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10);
  renderDeleteList();
}

function hideBatchDeleteModal() {
  const modal = document.getElementById('batchDeleteModal');
  if (!modal) return;
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 300);
}

function renderDeleteList() {
  const list = document.getElementById('deleteProductList');
  const header = document.getElementById('deleteProductHeader');
  if (!list) return;
  const allProducts = Object.entries(nipponProducts).flatMap(([cat, items]) =>
    (items || []).map(p => (typeof p === 'string' ? { name: p, category: cat } : { ...p, category: cat }))
  );
  list.innerHTML = allProducts.map(p => {
    const id = p.id || (p.name.replace(/[^\w]/g,'').slice(0,8) + (p.createdAt ? '' : Math.floor(Math.random()*1000)));
    return `
      <label class=\"transfer-item\">
        <input type=\"checkbox\" data-name=\"${p.name}\" data-category=\"${p.category}\" />
        <span>${p.name}</span>
        <span style=\"margin-left:auto;color:#64748b;font-size:12px;\">ID: ${id}</span>
      </label>
    `;
  }).join('');
  if (header) header.textContent = `选择商品（${allProducts.length}）`;
  const search = document.getElementById('deleteProductSearch');
  if (search) {
    search.oninput = () => {
      Array.from(list.children).forEach(el => {
        const text = el.textContent.toLowerCase();
        el.style.display = text.includes(search.value.toLowerCase()) ? '' : 'none';
      });
    };
  }
}

// Filter modal helpers
function showFilterModal(){
  const modal = document.getElementById('filterModal');
  if (!modal) return;
  modal.style.display = 'flex';
  setTimeout(()=>modal.classList.add('show'),10);
  // populate selects
  const catSel = document.getElementById('filterCategory');
  const shopSel = document.getElementById('filterShop');
  if (catSel) {
    const cats = Object.keys(nipponProducts).filter(n => n !== '进口馆');
    catSel.innerHTML = ['<option value="ALL">全部</option>', ...cats.map(c=>`<option value="${c}">${c}</option>`)].join('');
    catSel.value = window.currentProductCategoryFilter || 'ALL';
  }
  if (shopSel) {
    const shops = ['全部','立邦官方旗舰店','立邦乳胶漆官方旗舰店','立邦防水旗舰店','立邦美缝官方旗舰店','立邦补墙膏旗舰店'];
    shopSel.innerHTML = shops.map(s=>`<option value="${s}">${s}</option>`).join('');
    shopSel.value = '全部';
  }
}
function hideFilterModal(){
  const modal = document.getElementById('filterModal');
  if (!modal) return;
  modal.classList.remove('show');
  setTimeout(()=>modal.style.display='none',300);
}

function updateCharCounters() {
  const nameInput = document.getElementById('productName');
  const infoEditorEl = document.getElementById('productInfoEditor');
  const nameCounter = document.getElementById('nameCounter');
  const infoCounter = document.getElementById('infoCounter');
  
  if (nameInput && nameCounter) {
    nameCounter.textContent = `${nameInput.value.length}/80`;
  }
  
  if (infoEditorEl && infoCounter) {
    const textLen = infoEditorEl.innerText.trim().length;
    infoCounter.textContent = `${textLen}/3000`;
  }
}

// SKU toggle function removed - no longer needed

// Tab switching function removed - no longer needed

function saveProductChanges() {
  const productName = document.getElementById('productName').value.trim();
  const productLink = document.getElementById('productLink').value.trim();
  const productInfo = (document.getElementById('productInfoEditor')?.innerHTML || '').trim();
  // 收集关联店铺
  const shopSelect = document.getElementById('shopSelect');
  const selectedShops = shopSelect ? [shopSelect.value] : [];
  // 收集所属类别
  const catSelect = document.getElementById('productCategorySelect');
  const newBelongCategory = catSelect ? catSelect.value : null;
  
  if (!productName) {
    alert('请输入商品名称');
    return;
  }
  
  if (!productLink) {
    alert('请输入商品链接');
    return;
  }
  
  const { categoryName, productName: oldName } = window.currentEditingProduct;
  const products = nipponProducts[categoryName] || [];
  
  // 检查是否修改了商品名称，如果修改了需要检查是否重名
  if (productName !== oldName && products.includes(productName)) {
    alert('该商品名称已存在');
    return;
  }
  
  // 更新商品对象（兼容字符串老数据）
  const idx = products.findIndex(p => (typeof p === 'string' ? p === oldName : p.name === oldName));
  if (idx !== -1) {
    const old = products[idx];
    const oldObj = typeof old === 'string' ? { name: old } : old;
    const updated = {
      ...oldObj,
      name: productName,
      link: productLink,
      info: productInfo,
      shops: selectedShops.length ? selectedShops : oldObj.shops || []
    };
    // 如果更换了所属类别，则从旧类别移除并添加到新类别
    if (newBelongCategory && newBelongCategory !== categoryName) {
      products.splice(idx, 1);
      nipponProducts[newBelongCategory] = nipponProducts[newBelongCategory] || [];
      nipponProducts[newBelongCategory].push(updated);
    } else {
      products[idx] = updated;
    }
  }
  
  // SKU information removed - no longer needed
  
  // 这里可以添加保存到后端的逻辑
  console.log('保存商品信息:', {
    categoryName,
    oldName,
    newName: productName,
    link: productLink,
    info: productInfo,
    shops: selectedShops,
    belongCategory: newBelongCategory || categoryName
  });
  
  alert('商品信息已保存');
  hideEditProductModal();
  refreshProductLibrary();
}

function saveCategories() {
  // 这里可以添加保存到后端的逻辑
  console.log('保存品类数据:', categories);
  alert('品类数据已保存');
  hideCategoryModal();
}

// Initialize category management event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Category modal event listeners
  const categoryModal = document.getElementById('categoryModal');
  const closeCategoryModal = document.getElementById('closeCategoryModal');
  const cancelCategoryBtn = document.getElementById('cancelCategoryBtn');
  const saveCategoryBtn = document.getElementById('saveCategoryBtn');
  const addCategoryBtn = document.getElementById('addCategoryBtn');
  
  if (closeCategoryModal) {
    closeCategoryModal.addEventListener('click', hideCategoryModal);
  }
  
  if (cancelCategoryBtn) {
    cancelCategoryBtn.addEventListener('click', hideCategoryModal);
  }
  
  if (saveCategoryBtn) {
    saveCategoryBtn.addEventListener('click', saveCategories);
  }
  
  if (addCategoryBtn) {
    addCategoryBtn.addEventListener('click', addCategory);
  }
  
  // Close modal when clicking overlay
  if (categoryModal) {
    categoryModal.addEventListener('click', function(e) {
      if (e.target === categoryModal) {
        hideCategoryModal();
      }
    });
  }
  
  // Enter key to add category
  const newCategoryName = document.getElementById('newCategoryName');
  if (newCategoryName) {
    newCategoryName.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addCategory();
      }
    });
  }
  
  // Category management button event listener (delegated)
  document.addEventListener('click', function(e) {
    if (e.target.closest('.category-mgmt-btn')) {
      showCategoryModal();
    }
    
    // Product edit button
    if (e.target.closest('.edit-product-btn')) {
      const btn = e.target.closest('.edit-product-btn');
      const categoryName = btn.dataset.category;
      const productName = btn.dataset.product;
      editProduct(categoryName, productName);
    }
    
    // Select all checkbox
    if (e.target.id === 'selectAllProducts') {
      const isChecked = e.target.checked;
      const checkboxes = document.querySelectorAll('.product-checkbox');
      checkboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
      });
    }
    
    // Individual product checkbox
    if (e.target.classList.contains('product-checkbox')) {
      updateSelectAllCheckbox();
    }
    
    // Open batch modal
    if (e.target.closest('#openBatchModal')) {
      showBatchModal();
    }
    // Open filter modal
    if (e.target.closest('#openFilterModal')) {
      showFilterModal();
    }

    // Category filter chip click (delegated)
    const chip = e.target.closest('.category-chip');
    if (chip) {
      const cat = chip.getAttribute('data-cat') || 'ALL';
      window.currentProductCategoryFilter = cat;
      currentProductPage = 1;
      refreshProductLibrary();
    }
    
    // Product delete button
    if (e.target.closest('.delete-product-btn')) {
      const btn = e.target.closest('.delete-product-btn');
      const categoryName = btn.dataset.category;
      const productName = btn.dataset.product;
      deleteProduct(categoryName, productName);
    }
    
    // Product detail button
    if (e.target.closest('.view-product-btn')) {
      const btn = e.target.closest('.view-product-btn');
      const categoryName = btn.dataset.category;
      const productName = btn.dataset.product;
      showProductDetail(categoryName, productName);
    }
    
    // Category edit button
    if (e.target.closest('.btn-category-edit')) {
      const btn = e.target.closest('.btn-category-edit');
      const categoryName = btn.dataset.category;
      editCategoryFromTable(categoryName);
    }
    
    // Category delete button
    if (e.target.closest('.btn-category-delete')) {
      const btn = e.target.closest('.btn-category-delete');
      const categoryName = btn.dataset.category;
      deleteCategoryFromTable(categoryName);
    }
  });
  
  // Edit product modal event listeners
  const editProductModal = document.getElementById('editProductModal');
  const closeEditModal = document.getElementById('closeEditModal');
  const cancelEditBtn = document.getElementById('cancelEditBtn');
  const confirmEditBtn = document.getElementById('confirmEditBtn');
  const productNameInput = document.getElementById('productName');
  const productInfoTextarea = document.getElementById('productInfo');
  const skuTextarea = document.getElementById('skuInfo');
  const skuToggle = document.getElementById('skuToggle');
  const imageInput = document.getElementById('imageInput');
  const uploadImageBtn = document.querySelector('.upload-image-btn');
  
  if (closeEditModal) {
    closeEditModal.addEventListener('click', hideEditProductModal);
  }
  
  if (cancelEditBtn) {
    cancelEditBtn.addEventListener('click', hideEditProductModal);
  }
  
  // Product detail drawer event listeners
  const closeProductDetailDrawer = document.getElementById('closeProductDetailDrawer');
  if (closeProductDetailDrawer) {
    closeProductDetailDrawer.addEventListener('click', hideProductDetail);
  }
  
  if (confirmEditBtn) {
    confirmEditBtn.addEventListener('click', saveProductChanges);
  }

  // 移除富文本相关事件绑定（已回退为简单文本域）

// 安全初始化函数，避免未定义时报错
function initRTE(){
  // 这里预留扩展位，当前所有绑定已在 DOMContentLoaded 中委托完成
  return true;
}

  // Batch modal listeners
  const batchModal = document.getElementById('batchModal');
  const closeBatchModal = document.getElementById('closeBatchModal');
  const cancelBatchBtn = document.getElementById('cancelBatchBtn');
  const applyBatchBtn = document.getElementById('applyBatchBtn');
  if (closeBatchModal) closeBatchModal.addEventListener('click', hideBatchModal);
  if (cancelBatchBtn) cancelBatchBtn.addEventListener('click', hideBatchModal);
  if (batchModal) {
    batchModal.addEventListener('click', function(e){ if (e.target === batchModal) hideBatchModal(); });
  }
  if (applyBatchBtn) {
    applyBatchBtn.addEventListener('click', function(){
      // collect selections
      const pickedProducts = Array.from(document.querySelectorAll('#transferProductList input:checked')).map(i => ({ name: i.dataset.name, from: i.dataset.category }));
      const pickedCategories = Array.from(document.querySelectorAll('#transferCategoryList input:checked')).map(i => i.dataset.category);
      if (!pickedProducts.length || !pickedCategories.length) {
        alert('请至少选择1个商品和1个品类');
        return;
      }
      // assign products to each picked category (append if not exists)
      pickedCategories.forEach(cat => {
        nipponProducts[cat] = nipponProducts[cat] || [];
        pickedProducts.forEach(p => {
          const exists = (nipponProducts[cat] || []).some(item => (typeof item === 'string' ? item === p.name : item.name === p.name));
          if (!exists) nipponProducts[cat].push({ name: p.name });
        });
      });
      // update counts and refresh
      categories.forEach(c => updateCategoryProductCount(c.name));
      hideBatchModal();
      refreshProductLibrary();
      alert('批量配置已应用');
    });
  }

  // Batch delete modal listeners
  const batchDeleteModal = document.getElementById('batchDeleteModal');
  const closeBatchDeleteModal = document.getElementById('closeBatchDeleteModal');
  const cancelBatchDeleteBtn = document.getElementById('cancelBatchDeleteBtn');
  const applyBatchDeleteBtn = document.getElementById('applyBatchDeleteBtn');
  if (closeBatchDeleteModal) closeBatchDeleteModal.addEventListener('click', hideBatchDeleteModal);
  if (cancelBatchDeleteBtn) cancelBatchDeleteBtn.addEventListener('click', hideBatchDeleteModal);
  if (batchDeleteModal) batchDeleteModal.addEventListener('click', function(e){ if (e.target === batchDeleteModal) hideBatchDeleteModal(); });
  if (applyBatchDeleteBtn) {
    applyBatchDeleteBtn.addEventListener('click', function(){
      const picked = Array.from(document.querySelectorAll('#deleteProductList input:checked')).map(i => ({ name: i.dataset.name, from: i.dataset.category }));
      if (!picked.length) { alert('请至少选择1个商品'); return; }
      picked.forEach(p => {
        const arr = nipponProducts[p.from] || [];
        const idx = arr.findIndex(item => (typeof item === 'string' ? item === p.name : item.name === p.name));
        if (idx !== -1) arr.splice(idx, 1);
        nipponProducts[p.from] = arr;
      });
      categories.forEach(c => updateCategoryProductCount(c.name));
      hideBatchDeleteModal();
      refreshProductLibrary();
      alert('批量删除已完成');
    });
  }
  
  // Filter modal events
  const filterModal = document.getElementById('filterModal');
  const closeFilterModal = document.getElementById('closeFilterModal');
  const applyFilterBtn = document.getElementById('applyFilterBtn');
  const resetFilterBtn = document.getElementById('resetFilterBtn');
  if (closeFilterModal) closeFilterModal.addEventListener('click', hideFilterModal);
  if (filterModal) filterModal.addEventListener('click', (e)=>{ if (e.target === filterModal) hideFilterModal(); });
  if (applyFilterBtn) applyFilterBtn.addEventListener('click', function(){
    const kw = (document.getElementById('filterKeyword')?.value || '').toLowerCase();
    const cat = document.getElementById('filterCategory')?.value || 'ALL';
    const shop = document.getElementById('filterShop')?.value || '全部';
    const start = document.getElementById('filterStartDate')?.value;
    const end = document.getElementById('filterEndDate')?.value;
    window.currentProductCategoryFilter = cat;
    window.currentAdvancedFilter = { kw, shop, start, end };
    currentProductPage = 1;
    hideFilterModal();
    refreshProductLibrary();
  });
  if (resetFilterBtn) resetFilterBtn.addEventListener('click', function(){
    window.currentProductCategoryFilter = 'ALL';
    window.currentAdvancedFilter = null;
    hideFilterModal();
    refreshProductLibrary();
  });
  if (productNameInput) {
    productNameInput.addEventListener('input', updateCharCounters);
  }
  
  if (infoEditorEl) {
    infoEditorEl.addEventListener('input', updateCharCounters);
  }
  
  if (skuTextarea) {
    skuTextarea.addEventListener('input', updateCharCounters);
  }
  
  if (skuToggle) {
    skuToggle.addEventListener('change', toggleSkuInput);
  }
  
  if (uploadImageBtn && imageInput) {
    uploadImageBtn.addEventListener('click', () => imageInput.click());
    imageInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          document.getElementById('currentImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }
  
  // Close modal when clicking overlay
  if (editProductModal) {
    editProductModal.addEventListener('click', function(e) {
      if (e.target === editProductModal) {
        hideEditProductModal();
      }
    });
  }
  
  // SKU toolbar buttons removed - no longer needed
  
  // Initialize product library events when page loads
  setupProductLibraryEvents();
  
  // Initialize page with default route
  render(getRouteFromHash());
  // Ensure pagination renders on initial load (even before table is drawn)
  setTimeout(() => {
    ensurePaginationRendered();
    updateCategoryPagination();
  }, 0);

  // Fallback: observe DOM changes and render pagination when container appears
  const observer = new MutationObserver(() => {
    ensurePaginationRendered();
    updateCategoryPagination();
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

// Update select all checkbox state
function updateSelectAllCheckbox() {
  const selectAllCheckbox = document.getElementById('selectAllProducts');
  const productCheckboxes = document.querySelectorAll('.product-checkbox');
  
  if (!selectAllCheckbox || !productCheckboxes.length) return;
  
  const checkedCount = Array.from(productCheckboxes).filter(cb => cb.checked).length;
  const totalCount = productCheckboxes.length;
  
  if (checkedCount === 0) {
    selectAllCheckbox.checked = false;
    selectAllCheckbox.indeterminate = false;
  } else if (checkedCount === totalCount) {
    selectAllCheckbox.checked = true;
    selectAllCheckbox.indeterminate = false;
  } else {
    selectAllCheckbox.checked = false;
    selectAllCheckbox.indeterminate = true;
  }
}

// Toggle batch delete mode
function toggleBatchDeleteMode() {
  const isBatchMode = window.isBatchDeleteMode || false;
  
  if (isBatchMode) {
    // Exit batch delete mode
    exitBatchDeleteMode();
  } else {
    // Enter batch delete mode
    enterBatchDeleteMode();
  }
}

// Enter batch delete mode
function enterBatchDeleteMode() {
  window.isBatchDeleteMode = true;
  
  // Show checkbox column
  const selectColumns = document.querySelectorAll('.col-select');
  selectColumns.forEach(col => {
    col.style.display = 'table-cell';
  });
  
  // Show delete selected button
  const deleteSelectedBtn = document.getElementById('deleteSelectedBtn');
  if (deleteSelectedBtn) {
    deleteSelectedBtn.style.display = 'inline-flex';
  }
  
  // Update batch delete button text
  const batchDeleteBtn = document.getElementById('openBatchDeleteModal');
  if (batchDeleteBtn) {
    batchDeleteBtn.innerHTML = '<span class="btn-icon">✕</span>取消批量删除';
  }
}

// Exit batch delete mode
function exitBatchDeleteMode() {
  window.isBatchDeleteMode = false;
  
  // Hide checkbox column
  const selectColumns = document.querySelectorAll('.col-select');
  selectColumns.forEach(col => {
    col.style.display = 'none';
  });
  
  // Hide delete selected button
  const deleteSelectedBtn = document.getElementById('deleteSelectedBtn');
  if (deleteSelectedBtn) {
    deleteSelectedBtn.style.display = 'none';
  }
  
  // Reset all checkboxes
  const checkboxes = document.querySelectorAll('.product-checkbox, #selectAllProducts');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
    checkbox.indeterminate = false;
  });
  
  // Update batch delete button text
  const batchDeleteBtn = document.getElementById('openBatchDeleteModal');
  if (batchDeleteBtn) {
    batchDeleteBtn.innerHTML = '<span class="btn-icon">🗑️</span>批量删除商品信息';
  }
}

// Perform batch delete operation
function performBatchDelete() {
  const selectedCheckboxes = document.querySelectorAll('.product-checkbox:checked');
  
  if (selectedCheckboxes.length === 0) {
    alert('请先选择要删除的商品');
    return;
  }
  
  const selectedProducts = Array.from(selectedCheckboxes).map(checkbox => ({
    name: checkbox.dataset.product,
    category: checkbox.dataset.category
  }));
  
  const productNames = selectedProducts.map(p => p.name).join('、');
  const confirmMessage = `确定要删除以下 ${selectedProducts.length} 个商品吗？\n\n${productNames}`;
  
  if (confirm(confirmMessage)) {
    // Delete selected products
    selectedProducts.forEach(product => {
      const categoryProducts = nipponProducts[product.category] || [];
      const index = categoryProducts.findIndex(item => 
        (typeof item === 'string' ? item === product.name : item.name === product.name)
      );
      
      if (index !== -1) {
        categoryProducts.splice(index, 1);
        nipponProducts[product.category] = categoryProducts;
      }
    });
    
    // Update category counts
    categories.forEach(category => {
      updateCategoryProductCount(category.name);
    });
    
    // Exit batch delete mode
    exitBatchDeleteMode();
    
    // Refresh the table
    refreshProductLibrary();
    
    alert(`成功删除 ${selectedProducts.length} 个商品`);
  }
}

// Reset all filters to default state
function resetAllFilters() {
  // Reset category filter
  window.currentProductCategoryFilter = 'ALL';
  
  // Reset advanced filters
  window.currentAdvancedFilter = { 
    shop: '全部店铺', 
    start: '', 
    end: '', 
    kw: '' 
  };
  
  // Reset current page
  currentProductPage = 1;
  
  // Update UI elements
  const categorySelect = document.getElementById('inlineFilterCategory');
  const shopSelect = document.getElementById('inlineFilterShop');
  const startDateInput = document.getElementById('inlineStartDate');
  const endDateInput = document.getElementById('inlineEndDate');
  const searchInput = document.querySelector('.search-input');
  
  if (categorySelect) categorySelect.value = 'ALL';
  if (shopSelect) shopSelect.value = '全部店铺';
  if (startDateInput) startDateInput.value = '';
  if (endDateInput) endDateInput.value = '';
  if (searchInput) searchInput.value = '';
  
  // Refresh the product library
  refreshProductLibrary();
  
  // Show success message
  alert('筛选条件已重置');
}


