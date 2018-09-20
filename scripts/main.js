$(document).ready(function(){
	var originalSrc = "";

	$('#js-input-file').on('change', function() {
		var file = $(this)[0].files[0]
		
		var fileReader = new FileReader();
		fileReader.onload = function() {
			originalSrc = fileReader.result;

			$('#js-img').attr('src', originalSrc);
			$('#js-img-hidden').attr('src', originalSrc);
		}

		fileReader.readAsDataURL(file);
	});

	$('#js-input-brightness').slider().on('slideStop', function() {
		var brightness = $('#js-input-brightness').slider('getValue');
		$('#js-img').attr('src', 'images/loading.gif');

		Caman('#js-img-hidden', function() {
			this.brightness(brightness);

			this.render(function() {
				var src = this.save("filename");

				$('#js-img').attr('src', src);

				$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
				$('#js-img-hidden').attr('src', originalSrc);
			});
		});
	});

	$('#js-input-contrast').slider().on('slideStop', function() {
		var contrast = $('#js-input-contrast').slider('getValue');
		$('#js-img').attr('src', 'images/loading.gif');

		Caman('#js-img-hidden', function() {
			this.contrast(contrast);

			this.render(function() {
				var src = this.save("filename");

				$('#js-img').attr('src', src);

				$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
				$('#js-img-hidden').attr('src', originalSrc);
			});
		});
	});

	$('#js-input-saturation').slider().on('slideStop', function() {
		var saturation = $('#js-input-saturation').slider('getValue');
		$('#js-img').attr('src', 'images/loading.gif');

		Caman('#js-img-hidden', function() {
			this.saturation(saturation);

			this.render(function() {
				var src = this.save("filename");

				$('#js-img').attr('src', src);

				$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
				$('#js-img-hidden').attr('src', originalSrc);
			});
		});
	});

	$('#js-input-vibrance').slider().on('slideStop', function() {
		var vibrance = $('#js-input-vibrance').slider('getValue');
		$('#js-img').attr('src', 'images/loading.gif');

		Caman('#js-img-hidden', function() {
			this.vibrance(vibrance);

			this.render(function() {
				var src = this.save("filename");

				$('#js-img').attr('src', src);

				$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
				$('#js-img-hidden').attr('src', originalSrc);
			});
		});
	});

	$('#js-input-exposure').slider().on('slideStop', function() {
		var exposure = $('#js-input-exposure').slider('getValue');
		$('#js-img').attr('src', 'images/loading.gif');

		Caman('#js-img-hidden', function() {
			this.exposure(exposure);

			this.render(function() {
				var src = this.save("filename");

				$('#js-img').attr('src', src);

				$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
				$('#js-img-hidden').attr('src', originalSrc);
			});
		});
	});

	$('#js-input-hue').slider().on('slideStop', function() {
		var hue = $('#js-input-hue').slider('getValue');
		$('#js-img').attr('src', 'images/loading.gif');

		Caman('#js-img-hidden', function() {
			this.hue(hue);

			this.render(function() {
				var src = this.save("filename");

				$('#js-img').attr('src', src);

				$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
				$('#js-img-hidden').attr('src', originalSrc);
			});
		});
	});

	$('#js-input-sepia').slider().on('slideStop', function() {
		var sepia = $('#js-input-sepia').slider('getValue');
		$('#js-img').attr('src', 'images/loading.gif');

		Caman('#js-img-hidden', function() {
			this.sepia(sepia);

			this.render(function() {
				var src = this.save("filename");

				$('#js-img').attr('src', src);

				$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
				$('#js-img-hidden').attr('src', originalSrc);
			});
		});
	});

	$('#js-input-gamma').slider().on('slideStop', function() {
		var gamma = $('#js-input-gamma').slider('getValue');
		$('#js-img').attr('src', 'images/loading.gif');

		Caman('#js-img-hidden', function() {
			this.gamma(gamma);

			this.render(function() {
				var src = this.save("filename");

				$('#js-img').attr('src', src);

				$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
				$('#js-img-hidden').attr('src', originalSrc);
			});
		});
	});

	$('#js-input-noise').slider().on('slideStop', function() {
		var noise = $('#js-input-noise').slider('getValue');
		$('#js-img').attr('src', 'images/loading.gif');

		Caman('#js-img-hidden', function() {
			this.noise(noise);

			this.render(function() {
				var src = this.save("filename");

				$('#js-img').attr('src', src);

				$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
				$('#js-img-hidden').attr('src', originalSrc);
			});
		});
	});

	$('#js-input-clip').slider().on('slideStop', function() {
		var clip = $('#js-input-clip').slider('getValue');
		$('#js-img').attr('src', 'images/loading.gif');

		Caman('#js-img-hidden', function() {
			this.clip(clip);

			this.render(function() {
				var src = this.save("filename");

				$('#js-img').attr('src', src);

				$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
				$('#js-img-hidden').attr('src', originalSrc);
			});
		});
	});

	$('#js-input-sharpen').slider().on('slideStop', function() {
		var sharpen = $('#js-input-sharpen').slider('getValue');
		$('#js-img').attr('src', 'images/loading.gif');

		Caman('#js-img-hidden', function() {
			this.sharpen(sharpen);

			this.render(function() {
				var src = this.save("filename");

				$('#js-img').attr('src', src);

				$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
				$('#js-img-hidden').attr('src', originalSrc);
			});
		});
	});

	$('#js-input-stackblur').slider().on('slideStop', function() {
		var stackBlur = $('#js-input-stackblur').slider('getValue');
		$('#js-img').attr('src', 'images/loading.gif');

		Caman('#js-img-hidden', function() {
			this.stackBlur(stackBlur);

			this.render(function() {
				var src = this.save("filename");

				$('#js-img').attr('src', src);

				$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
				$('#js-img-hidden').attr('src', originalSrc);
			});
		});
	});

  	$('#js-button-greyscale').on('click', function() {
  		$('#js-img').attr('src', 'images/loading.gif');

    	Caman('#js-img-hidden', function() {
      		this.greyscale();

      		this.render(function() {
	        	var src = this.save("filename");

	        	$('#js-img').attr('src', src);

	        	$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
	        	$('#js-img-hidden').attr('src', originalSrc);
      		});
    	});
  	});

  	$('#js-button-invert').on('click', function() {
  		$('#js-img').attr('src', 'images/loading.gif');

    	Caman('#js-img-hidden', function() {
      		this.invert();

      		this.render(function() {
        		var src = this.save("filename");

	        	$('#js-img').attr('src', src);

	        	$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
	        	$('#js-img-hidden').attr('src', originalSrc);
      		});
    	});
  	});

	$('#js-button-vintage').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.vintage();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

  	$('#js-button-lomo').on('click', function() {
  		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.lomo();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
  	});

	$('#js-button-clarity').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.clarity();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

	$('#js-button-sincity').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.sinCity();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

	$('#js-button-sincity').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
	      	this.sinCity();

	      	this.render(function() {
	        	var src = this.save("filename");

	        	$('#js-img').attr('src', src);

	        	$('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
	        	$('#js-img-hidden').attr('src', originalSrc);
	      	});
	    });
	});

	$('#js-button-sunrise').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.sunrise();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

	$('#js-button-crossprocess').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.crossProcess();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

	$('#js-button-orangepeel').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.orangePeel();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

	$('#js-button-love').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.love();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

	$('#js-button-grungy').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.grungy();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});
	
	$('#js-button-jarques').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.jarques();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});	

	$('#js-button-pinhole').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.pinhole();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

	$('#js-button-oldboot').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.oldBoot();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

	$('#js-button-glowingsun').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.glowingSun();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

	$('#js-button-hazydays').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.hazyDays();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

	$('#js-button-hermajesty').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.herMajesty();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

	$('#js-button-nostalgia').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.nostalgia();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

	$('#js-button-hemingway').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.hemingway();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});

	$('#js-button-concentrate').on('click', function() {
		$('#js-img').attr('src', 'images/loading.gif');

	    Caman('#js-img-hidden', function() {
		    this.concentrate();

		    this.render(function() {
		        var src = this.save("filename");

		        $('#js-img').attr('src', src);

		        $('#js-img-hidden').replaceWith('<img id="js-img-hidden" src="" style="display: none;">');
		        $('#js-img-hidden').attr('src', originalSrc);
		    });
	    });
	});
});
