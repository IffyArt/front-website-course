import type { NextApiRequest, NextApiResponse } from 'next';

interface ScrapeData {
  TotalRows: number;
  LimitedTotalRows: number;
  Rows: {
    Id: string;
  }[];
}

export interface ProdData {
  ProdId: string;
  ProdName: string;
  SellerId: string;
  CateId: string;
  Currency: string;
  SourceInfo: null;
  PriceRange: number[];
  Image: string;
  StockQty: number;
  SoldQty: number;
  SaleType: string;
  Payment: string;
  ShippingCost: number;
  TitleStyle: number;
  PostTime: string;
  CloseTime: string;
  BidInfo: null;
  BidRecord: number;
  BuyerLimit: number;
  Video: null;
  StockStatus: number;
  PreOrderShipDate: null;
  SpecActive: string;
  DeliverWay: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const url =
    'https://rtapi.ruten.com.tw/api/search/v3/index.php/core/prod?q=%E9%9B%BB%E6%B1%A0&type=direct&sort=rnk%2Fdc&limit=60&offset=1'; // 換成要爬取的網站
  const response = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0',
    },
  });

  if (response.ok) {
    const scrapeData: ScrapeData = await response.json();

    const prodUrl = `https://rtapi.ruten.com.tw/api/prod/v2/index.php/prod?id=${scrapeData.Rows.map(
      (item) => item.Id,
    ).join(',')}`;

    const prodResponse = await fetch(prodUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0',
      },
    });

    let prodList: ProdData[] = await prodResponse.json();

    res.status(200).json(prodList);
  } else {
    res.status(response.status).json({ titles: [] });
  }
}
