$.fn.emailpop = function() {
	if (!$("#emailpop").length) {
		$("body").append('<ul id="emailpop" class="autopop"></ul>');
	}
	$("#emailpop").on("mouseover", "li:not(:first)", function() {
		$(this).addClass("pop").siblings(".pop").removeClass("pop");
	}).on("mousedown", "li:not(:first)", function() {
		$("#" + $(this).parent().hide().attr("data-bind")).val($(this).text());
	});
	var list = ["gmail.com", "sina.com", "163.com", "qq.com", "126.com", "vip.sina.com", "sina.cn", "hotmail.com", "sohu.com", "yahoo.cn", "139.com", "wo.com.cn", "189.cn", "21cn.com"],
		l = list.length,
		$pop = $("#emailpop"),
		$bind, delay,
		resize = function() {
			var offset = $bind.offset();
			$pop.css({
				left: offset.left,
				top: offset.top + $bind.outerHeight() + 2,
				width: $bind.outerWidth()
			});
		}
	return $(this).attr("autocomplete", "off").each(function(i) {
		var $t = $(this).on({
			focus: function() {
				$bind = $t;
				if ($bind.attr("id")) $pop.attr("data-bind", $bind.attr("id"));
				else {
					var id = "emailpop" + (Math.random() + "").substr(2, 9) + i * 9;
					$bind.attr("id", id)
					$pop.attr("data-bind", id);
				}
				resize();
				$(window).on("resize", resize);
			},
			keydown: function(e) {
				switch (e.which) {
					case 9:
						$pop.hide();
						break;
					case 32:
						return false;
						break;
					case 13:
						$t.val($pop.hide().find(".pop").text());
						break;
					case 38:
						var $p = $pop.find(".pop").removeClass("pop");
						if ($p.index() > 1) $p.prev().addClass("pop");
						else $pop.find("li:last").addClass("pop");
						return false;
					case 40:
						var $p = $pop.find(".pop").removeClass("pop");
						if ($p.index() < l + 1) $p.next().addClass("pop");
						else $pop.find("li:eq(1)").addClass("pop");
						return false;
					default:
						if (delay) clearTimeout(delay);
						delay = setTimeout(function() {
							var val = $t.val(),
								html = '<li class="notpop">请选择邮箱类型</li><li class="pop">' + val + '</li>'
							if ($t.val() == "") $pop.hide();
							else {
								var i = 0,
									s = val.indexOf("@"),
									u = val,
									r = "";
								if (s >= 0) {
									u = val.substr(0, s);
									r = val.substr(s + 1)
								}
								for (; i < l; i++) {
									if (r.length > 0) {
										if (list[i].indexOf(r) > -1 && r != list[i]) html += "<li>" + u + "@" + list[i] + "</li>";
									} else html += "<li>" + u + "@" + list[i] + "</li>"
								}
								$pop.show();
							}
							$pop.html(html);
						}, 99)
				}
			},
			blur: function() {
				$pop.hide();
				$(window).off("resize", resize);
			}
		})
	})
}