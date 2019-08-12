describe("Shoplist", function() {

	it("should be able to return entered items", function() {
		var shop = Shoplist();
		shop.listShop('');
		assert.equal('',shop.getItems());
	});


	it("should be able to stop at the alocated bugdet given ", function() {
		var Total = Shoplist();
        Total.listShop("Items");
        assert.equal(Total.listShop(), "1000");;
	});

	it("should be able to return an error massage when clicked on the add cart button first", function() {
		var Total = Shoplist();
		Total.listShop("");
		assert.equal('',Total.getItems());
	});


	it("should be able to return an updated page when I click update button ", function() {
		var shop = Shoplist();
		shop.listShop("");
		assert.equal('',shop.getItems());
	});




})